// File: scripts/build.ts
// Purpose: Produces production-ready bundles for GitHub Pages by building assets, copying static files, and generating supporting metadata.
import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { join } from "node:path";

const builderVersion = "2.1.0";
const distDir = "dist";
const docsDir = "docs";
const docsClientDir = join(docsDir, "client");
const docsDistDir = join(docsDir, "dist");

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
        var separator =
          targetBase.indexOf("?") === -1
            ? "?"
            : targetBase.endsWith("?") || targetBase.endsWith("&")
              ? ""
              : "&";
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

await Promise.all([
  rm(distDir, { recursive: true, force: true }),
  rm(docsDir, { recursive: true, force: true }),
]);

const packageMetaRaw = await readFile("package.json", "utf8");
const packageMeta = JSON.parse(packageMetaRaw) as { homepage?: string };

const ensureLeadingSlash = (value: string) => (value.startsWith("/") ? value : `/${value}`);
const ensureTrailingSlash = (value: string) => (value.endsWith("/") ? value : `${value}/`);

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

await Promise.all([
  cp(distDir, docsClientDir, { recursive: true }),
  cp(distDir, docsDistDir, { recursive: true }),
  cp("images", join(docsDir, "images"), { recursive: true }),
  cp("index.html", join(docsDir, "index.html")),
  cp("robots.txt", join(docsDir, "robots.txt")),
  cp("sitemap.xml", join(docsDir, "sitemap.xml")),
]);

await Bun.write(join(docsDir, "404.html"), notFoundHtml);
await writeFile(join(docsDir, ".nojekyll"), "");

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
      <p>Hang tight! We’re sending you back to the main app experience.</p>
      <p><a id="fallback-link" href="/">Go to the portfolio homepage</a></p>
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

const spaFallbackRoutes = [
  "contact",
  "my-story",
  "resume",
  "case-studies",
  "case-studies/divar-secure-call",
  "case-studies/setare-aval-engagement",
];

await Promise.all(
  spaFallbackRoutes.map(async (routePath) => {
    const targetDir = join(docsDir, routePath);
    await mkdir(targetDir, { recursive: true });
    await Bun.write(join(targetDir, "index.html"), spaFallbackHtml);
  }),
);

console.log(
  "✅ Build completed. Static site available in docs/ and build artifacts copied to docs/client/ and docs/dist/",
);

