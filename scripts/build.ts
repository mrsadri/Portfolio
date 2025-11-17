// File: scripts/build.ts
// Purpose: Produces production-ready bundles for GitHub Pages by building assets, copying static files, and generating supporting metadata.
import { cp, mkdir, readFile, readdir, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";

const builderVersion = "3.0.0";
const distDir = "dist";
const docsDir = "docs";
const docsClientDir = join(docsDir, "client");

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
      <h1>We couldn't find that page</h1>
      <p>
        The address you visited doesn't exist or has moved. We're redirecting you back to the portfolio homepage.
        If you're not redirected automatically, use the button below.
      </p>
      <p><a id="home-link" href="#">Take me home</a></p>
    </main>
    <script>
      (function () {
        var storageKey = "portfolio-spa-redirect";
        var fullPath = window.location.pathname + window.location.search + window.location.hash;
        try {
          sessionStorage.setItem(storageKey, fullPath);
        } catch (error) {
          console.warn("Unable to persist redirect path in sessionStorage.", error);
        }

        var pathSegments = window.location.pathname.split("/").filter(Boolean);
        var repoSegment = "";
        if (window.location.hostname.endsWith("github.io") && pathSegments.length > 0) {
          repoSegment = "/" + pathSegments[0];
        }

        var targetBase = repoSegment ? repoSegment + "/" : "/";
        var redirectParam = encodeURIComponent(fullPath);
        var separator = targetBase.indexOf("?") === -1 ? "?" : (targetBase.endsWith("?") || targetBase.endsWith("&") ? "" : "&");
        var target = targetBase + separator + "redirect=" + redirectParam;

        var link = document.getElementById("home-link");
        if (link) {
          link.setAttribute("href", target);
        }

        setTimeout(function () {
          window.location.replace(target);
        }, 200);
      })();
    </script>
  </body>
</html>
`;

console.log(`🚧 Running static builder v${builderVersion}...`);

// Clean up old build artifacts
console.log("🧹 Cleaning up old build artifacts...");
await Promise.all([
  rm(distDir, { recursive: true, force: true }),
  rm(docsDir, { recursive: true, force: true }),
]);

const packageMetaRaw = await readFile("package.json", "utf8");
const packageMeta = JSON.parse(packageMetaRaw) as { homepage?: string };

const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);
const ensureTrailingSlash = (value: string) => (value.endsWith("/") ? value : `${value}/`);

/**
 * Resolves the public path for bundled assets based on deployment target.
 * 
 * IMPORTANT: GitHub Pages Behavior
 * ================================
 * When GitHub Pages is configured to serve from the `/docs` folder:
 * - Files are stored at: `docs/client/main.js` in the repository
 * - But accessed via: `https://mrsadri.github.io/Portfolio/client/main.js`
 * - GitHub Pages STRIPS the `/docs` prefix from URLs
 * 
 * Therefore, publicPath should be `/Portfolio/client/`, NOT `/Portfolio/docs/client/`
 */
const resolvePublicPath = () => {
  const envOverride = process.env.ASSET_PUBLIC_PATH ?? process.env.PUBLIC_PATH;
  if (envOverride && envOverride.trim().length > 0) {
    const normalized = ensureTrailingSlash(ensureLeadingSlash(envOverride.trim()));
    console.log(`📦 Using asset public path from environment: ${normalized}`);
    return normalized;
  }

  const homepage = packageMeta.homepage?.trim();
  if (homepage) {
    try {
      const homepageUrl = new URL(homepage);
      const pathname = homepageUrl.pathname.replace(/\/$/, "");
      if (pathname && pathname !== "/") {
        const normalized = ensureTrailingSlash(`${pathname}/client`);
        console.log(`📦 Using asset public path derived from package.json homepage: ${normalized}`);
        console.log(`   ℹ️  Files stored in docs/client/ will be accessible at ${normalized}`);
        return normalized;
      }
    } catch (error) {
      console.warn(
        `⚠️ Unable to derive asset path from package.json homepage (${homepage}). Falling back to default.`,
        error,
      );
    }
  }

  const fallback = "/client/";
  console.log(`📦 Using default asset public path: ${fallback}`);
  return fallback;
};

const publicPath = resolvePublicPath();

const result = await Bun.build({
  entrypoints: ["./src/main.tsx"],
  outdir: distDir,
  target: "browser",
  publicPath,
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

// Copy PDF files from public directory if they exist
const copyPdfFiles = async () => {
  try {
    const files = await readdir("public");
    const pdfFiles = files.filter((file) => file.toLowerCase().endsWith(".pdf"));
    await Promise.all(
      pdfFiles.map((pdfFile) => cp(join("public", pdfFile), join(docsDir, pdfFile))),
    );
    if (pdfFiles.length > 0) {
      console.log(`📄 Copied ${pdfFiles.length} PDF file(s) to docs/`);
    }
  } catch (error) {
    // Directory read failed or no PDF files, continue silently
  }
};

// Copy build artifacts to docs/ for GitHub Pages deployment
console.log("📁 Copying build artifacts to docs/...");
await Promise.all([
  cp(distDir, docsClientDir, { recursive: true }),
  cp("images", join(docsDir, "images"), { recursive: true }),
  cp("public/index.html", join(docsDir, "index.html")),
  cp("public/robots.txt", join(docsDir, "robots.txt")),
  cp("public/sitemap.xml", join(docsDir, "sitemap.xml")),
  cp(join(distDir, "main.js"), join(docsDir, "main.js")),
  cp(join(distDir, "main.js.map"), join(docsDir, "main.js.map")),
  cp(join(distDir, "main.css"), join(docsDir, "main.css")),
  copyPdfFiles(),
]);

await Bun.write(join(docsDir, "404.html"), notFoundHtml);
await writeFile(join(docsDir, ".nojekyll"), "");
await Bun.write("public/404.html", notFoundHtml);

// SPA fallback HTML - properly handles GitHub Pages base path
const spaFallbackHtml = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Masih Sadri Portfolio • Redirecting…</title>
    <meta name="robots" content="noindex, nofollow" />
    <meta
      name="description"
      content="Redirecting you back to the Masih Sadri portfolio so the requested page can load."
    />
    <style>
      :root { color-scheme: light; font-family: "Inter", "Helvetica Neue", Arial, sans-serif; }
      body { margin: 0; min-height: 100vh; display: grid; place-items: center; background: #f1f6ff; color: #0b2c5c; padding: 2rem; text-align: center; }
      main { max-width: 520px; background: #ffffff; padding: 2.5rem; border-radius: 20px; box-shadow: 0 24px 48px rgba(17, 76, 170, 0.12); }
      h1 { margin-top: 0; font-size: 1.85rem; }
      p { margin-bottom: 1.5rem; line-height: 1.6; }
      a { color: #1f6feb; font-weight: 600; text-decoration: none; }
      a:hover { text-decoration: underline; }
    </style>
  </head>
  <body>
    <main>
      <h1>Redirecting to the portfolio…</h1>
      <p>Hang tight! We're sending you back to the main app experience.</p>
      <p><a id="fallback-link" href="#">Go to the portfolio homepage</a></p>
    </main>
    <script>
      (function () {
        var storageKey = "portfolio-spa-redirect";
        var fullPath = window.location.pathname + window.location.search + window.location.hash;
        try {
          sessionStorage.setItem(storageKey, fullPath);
        } catch (error) {
          console.warn("Unable to persist redirect path in sessionStorage.", error);
        }

        var pathSegments = window.location.pathname.split("/").filter(Boolean);
        var repoSegment = "";
        if (window.location.hostname.endsWith("github.io") && pathSegments.length > 0) {
          repoSegment = "/" + pathSegments[0];
        }

        var targetBase = repoSegment ? repoSegment + "/" : "/";
        var redirectParam = encodeURIComponent(fullPath);
        var target = targetBase + "?redirect=" + redirectParam;

        var link = document.getElementById("fallback-link");
        if (link) {
          link.setAttribute("href", target);
        }

        window.location.replace(target);
      })();
    </script>
  </body>
</html>
`;

// All routes that need SPA fallback files
const spaFallbackRoutes = [
  "contact",
  "my-story",
  "resume",
  "case-studies",
  "case-studies/divar-secure-call",
  "case-studies/setare-aval-engagement",
  "case-studies/setare-yek-bill-payment",
];

console.log("📄 Generating SPA fallback files for routes...");
await Promise.all(
  spaFallbackRoutes.map(async (routePath) => {
    const targetDir = join(docsDir, routePath);
    await mkdir(targetDir, { recursive: true });
    await Bun.write(join(targetDir, "index.html"), spaFallbackHtml);

    const flatHtmlPath = join(docsDir, `${routePath}.html`);
    await mkdir(dirname(flatHtmlPath), { recursive: true });
    await Bun.write(flatHtmlPath, spaFallbackHtml);
  }),
);

console.log("✅ Build completed successfully!");
console.log("");
console.log("📦 Deployment Structure:");
console.log("   docs/");
console.log("   ├── client/          # All JS chunks and assets");
console.log("   ├── images/          # Image assets");
console.log("   ├── index.html       # Main HTML entry");
console.log("   ├── main.js          # Main JS bundle");
console.log("   ├── main.css         # Main CSS bundle");
console.log("   ├── 404.html         # Custom 404 page");
console.log("   ├── .nojekyll        # Disable Jekyll processing");
console.log("   └── [routes]/        # SPA fallback files");
console.log("");
console.log("🚀 Ready for GitHub Pages deployment from /docs folder");
console.log(`   Site will be accessible at: ${packageMeta.homepage || "your-github-pages-url"}`);
console.log("");
console.log("✅ All routes have SPA fallback files:");
spaFallbackRoutes.forEach((route) => {
  console.log(`   ✓ ${route}/index.html`);
  console.log(`   ✓ ${route}.html`);
});
