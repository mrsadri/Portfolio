// File: index.ts
// Purpose: Provides a Bun-powered development server that builds and serves the client bundle with graceful port fallbacks.
import path from "node:path";

const isProduction = Bun.env.NODE_ENV === "production";

if (!isProduction) {
  const buildResult = await Bun.build({
    entrypoints: ["./src/main.tsx"],
    outdir: "./dist",
    target: "browser",
    minify: false,
    splitting: true,
    sourcemap: "inline",
    // @ts-expect-error Bun's build watch option is available at runtime but missing from the current type definitions.
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

type NormalizedRequestPath = {
  normalized: string | null;
  hasTrailingSlash: boolean;
};

const projectRoot = process.cwd();
const distRoot = path.join(projectRoot, "dist");

const staticRoots = [distRoot, projectRoot];

const indexFileCandidates = [
  Bun.file(path.join(distRoot, "index.html")),
  Bun.file(path.join(projectRoot, "index.html")),
];

const normalizeRequestPath = (pathname: string): NormalizedRequestPath => {
  const hasTrailingSlash = pathname !== "/" && pathname.endsWith("/");
  let decoded = pathname;

  try {
    decoded = decodeURIComponent(pathname);
  } catch {
    return { normalized: null, hasTrailingSlash };
  }

  const trimmed = decoded.startsWith("/") ? decoded.slice(1) : decoded;
  let normalized = path.posix.normalize(trimmed);

  if (!normalized || normalized === ".") {
    normalized = "index.html";
  }

  if (normalized.startsWith("..")) {
    return { normalized: null, hasTrailingSlash };
  }

  return { normalized, hasTrailingSlash };
};

const findStaticFile = async (normalizedPath: NormalizedRequestPath) => {
  const { normalized, hasTrailingSlash } = normalizedPath;
  if (!normalized) {
    return null;
  }

  const candidates = new Set<string>([normalized]);
  const extension = path.posix.extname(normalized);

  if (!extension || hasTrailingSlash) {
    const directory = extension
      ? path.posix.dirname(normalized)
      : normalized;
    candidates.add(path.posix.join(directory, "index.html"));
  }

  for (const candidate of candidates) {
    for (const root of staticRoots) {
      const absolutePath = path.join(root, candidate);
      const file = Bun.file(absolutePath);
      if (await file.exists()) {
        return file;
      }
    }
  }

  return null;
};

const shouldServeIndex = (
  request: Request,
  normalizedPath: NormalizedRequestPath,
): boolean => {
  if (request.method !== "GET" && request.method !== "HEAD") {
    return false;
  }

  const acceptHeader = request.headers.get("accept") ?? "";

  if (acceptHeader.includes("text/html")) {
    return true;
  }

  const { normalized } = normalizedPath;
  if (!normalized) {
    return false;
  }

  return path.posix.extname(normalized) === "";
};

const serveIndex = async (): Promise<Response> => {
  for (const candidate of indexFileCandidates) {
    if (await candidate.exists()) {
      return new Response(candidate, {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }
  }

  return new Response("index.html not found", { status: 500 });
};

const createServer = (port: number) =>
  Bun.serve({
    port,
    reusePort: false,
    async fetch(request) {
      const url = new URL(request.url);
      const normalizedPath = normalizeRequestPath(url.pathname);
      const staticFile = await findStaticFile(normalizedPath);

      if (staticFile) {
        const response = new Response(staticFile);
        if (request.method === "HEAD") {
          return new Response(null, {
            status: response.status,
            headers: response.headers,
          });
        }
        return response;
      }

      if (shouldServeIndex(request, normalizedPath)) {
        const indexResponse = await serveIndex();
        if (request.method === "HEAD") {
          return new Response(null, {
            status: indexResponse.status,
            headers: indexResponse.headers,
          });
        }
        return indexResponse;
      }

      return new Response("Not found", { status: 404 });
    },
  });

type PortError = Error & { code?: string; errno?: number };

const isPortInUseError = (error: unknown): error is PortError => {
  if (!(error instanceof Error)) return false;
  const portError = error as PortError;
  return (
    portError.code === "EADDRINUSE" ||
    portError.code === "EADDRNOTAVAIL" ||
    portError.errno === -48 || // EADDRINUSE on macOS
    portError.errno === -49 || // EADDRNOTAVAIL on macOS
    error.message.includes("address already in use") ||
    error.message.includes("EADDRINUSE")
  );
};

const resolveInitialPort = () => {
  const configured = Bun.env.PORT;
  if (configured) {
    const parsed = Number.parseInt(configured, 10);
    if (Number.isFinite(parsed) && parsed > 0) {
      return parsed;
    }
    console.warn(
      `⚠️  Ignoring invalid PORT environment value "${configured}". Falling back to 3000.`,
    );
  }
  return 3000;
};

const preferredPorts = () => {
  const basePort = resolveInitialPort();
  const sequential = Array.from({ length: 10 }, (_, index) => basePort + index);
  return [...new Set([...sequential, 0])];
};

const serve = (): ReturnType<typeof Bun.serve> => {
  const candidates = preferredPorts();
  let lastError: Error | undefined;
  const skippedPorts: number[] = [];

  for (const candidate of candidates) {
    try {
      const server = createServer(candidate);
      const assignedPort = server.port;
      
      if (skippedPorts.length > 0) {
        const skippedList = skippedPorts.join(", ");
        console.warn(
          `⚠️  Port${skippedPorts.length > 1 ? "s" : ""} ${skippedList} ${skippedPorts.length > 1 ? "were" : "was"} in use (likely by other Bun processes).`,
        );
      }
      
      console.log(`🚀 Portfolio running at http://localhost:${assignedPort}`);
      return server;
    } catch (error) {
      if (isPortInUseError(error)) {
        skippedPorts.push(candidate);
        lastError = error;
        continue;
      }

      throw error;
    }
  }

  throw new Error(
    `Unable to start the dev server. All candidate ports (${candidates.join(
      ", ",
    )}) are in use.`,
    { cause: lastError },
  );
};

const server = serve();