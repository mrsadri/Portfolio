// File: scripts/build.ts
// Purpose: Produces production-ready bundles for GitHub Pages by building assets, copying static files, and generating supporting metadata.
import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const builderVersion = "2.1.0";
const distDir = "dist";
const docsDir = "docs";
const docsAssetsDir = join(docsDir, "assets");

const notFoundHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Page Not Found • Masih Sadri Portfolio</title>
    <meta
      name="description"
      content="We couldn't find the page you requested. Redirecting you back to the portfolio home."
    />
    <style>
      :root { color-scheme: light; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f1f6ff; color: #0b2c5c; padding: 2rem; text-align: center; }
      main { max-width: 540px; background: #ffffff; padding: 2.5rem; border-radius: 20px; box-shadow: 0 24px 48px rgba(17, 76, 170, 0.12); }
      h1 { margin-top: 0; font-size: 2rem; }
      p { margin-bottom: 1.5rem; line-height: 1.6; }
      a { color: #1f6feb; font-weight: 600; text-decoration: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <main>
      <h1>We couldn’t find that page</h1>
      <p>
        The address you visited doesn’t exist or has moved. We’re redirecting you back to the portfolio homepage.
        If you’re not redirected automatically, use the button below.
      </p>
      <p><a id="home-link" href="#">Take me home</a></p>
    </main>
    <script>
      (function () {
        var pathSegments = window.location.pathname.split("/").filter(Boolean);
        var repoSegment = pathSegments.length > 0 ? "/" + pathSegments[0] : "";
        var basePath = repoSegment ? repoSegment + "/" : "/";
        var target = basePath;
        var link = document.getElementById("home-link");
        link.setAttribute("href", target);
        setTimeout(function () {
          window.location.replace(target);
        }, 2500);
      })();
    </script>
  </body>
</html>
`;

console.log(`🚧 Running static builder v${builderVersion}...`);

await Promise.all([
  rm(distDir, { recursive: true, force: true }),
  rm(docsDir, { recursive: true, force: true }),
]);

const result = await Bun.build({
  entrypoints: ["./src/main.tsx"],
  outdir: distDir,
  target: "browser",
  minify: true,
  splitting: true,
  sourcemap: true,
});

if (!result.success) {
  console.error("❌ Build failed");
  for (const log of result.logs) {
    console.error(log);
  }
  process.exit(1);
}

await mkdir(docsDir, { recursive: true });

await Promise.all([
  cp(distDir, docsAssetsDir, { recursive: true }),
  cp("images", join(docsDir, "images"), { recursive: true }),
  cp("index.html", join(docsDir, "index.html")),
  cp("robots.txt", join(docsDir, "robots.txt")),
  cp("sitemap.xml", join(docsDir, "sitemap.xml")),
]);

await Bun.write(join(docsDir, "404.html"), notFoundHtml);
await writeFile(join(docsDir, ".nojekyll"), "");

console.log("✅ Build completed. Static site available in docs/ and build artifacts copied to docs/assets/");

