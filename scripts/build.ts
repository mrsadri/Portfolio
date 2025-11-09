import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const builderVersion = "2.1.0";
const distDir = "dist";
const docsDir = "docs";
const docsDistDir = join(docsDir, "dist");

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
  cp(distDir, docsDistDir, { recursive: true }),
  cp("images", join(docsDir, "images"), { recursive: true }),
  cp("index.html", join(docsDir, "index.html")),
  cp("robots.txt", join(docsDir, "robots.txt")),
  cp("sitemap.xml", join(docsDir, "sitemap.xml")),
]);

const indexHtml = await Bun.file("index.html").text();
await Bun.write(join(docsDir, "404.html"), indexHtml);
await writeFile(join(docsDir, ".nojekyll"), "");

console.log("✅ Build completed. Static site available in docs/ and build artifacts tracked in dist/");

