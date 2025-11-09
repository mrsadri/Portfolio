// File: index.ts
// Purpose: Provides a Bun-powered development server that builds and serves the client bundle with graceful port fallbacks.
const isProduction = Bun.env.NODE_ENV === "production";

if (!isProduction) {
  const buildResult = await Bun.build({
    entrypoints: ["./src/main.tsx"],
    outdir: "./dist",
    target: "browser",
    minify: false,
    splitting: true,
    sourcemap: "inline",
    watch: {
      onRebuild(error) {
        if (error) {
          console.error("❌ Client rebuild failed", error);
        } else {
          console.log("✅ Client rebuilt");
        }
      },
    },
  });

  if (!buildResult.success) {
    console.error("❌ Initial client build failed");
    for (const log of buildResult.logs) {
      console.error(log);
    }
    throw new Error("Client bundle failed to build");
  }
}

const sanitizePath = (pathname: string) =>
  pathname === "/" ? "/index.html" : pathname;

const readFile = async (pathname: string) => {
  const sanitized = sanitizePath(pathname);
  const distFile = Bun.file(`./dist${sanitized}`);

  if (await distFile.exists()) {
    return distFile;
  }

  return Bun.file(`.${sanitized}`);
};

const createServer = (port: number) =>
  Bun.serve({
    port,
    async fetch(request) {
      const url = new URL(request.url);
      const file = await readFile(url.pathname);

      if (await file.exists()) {
        return new Response(file);
      }

      // Hash-based routing handles most navigation,
      // but we still fall back to index.html for unknown paths.
      const indexFile = Bun.file("./index.html");
      return new Response(indexFile, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    },
  });

const serve = (port: number, retries = 5): ReturnType<typeof Bun.serve> => {
  try {
    return createServer(port);
  } catch (error) {
    if (
      error instanceof Error &&
      (error as { code?: string }).code === "EADDRINUSE"
    ) {
      if (retries > 0) {
        const nextPort = port + 1;
        console.warn(
          `⚠️  Port ${port} in use. Trying next available port (${nextPort}).`,
        );
        return serve(nextPort, retries - 1);
      }

      console.warn(`⚠️  All tried ports busy. Falling back to an ephemeral port.`);
      return createServer(0);
    }

    throw error;
  }
};

const initialPort = Number(Bun.env.PORT ?? 3000);
const server = serve(initialPort);

console.log(`🚀 Portfolio running at http://localhost:${server.port}`);