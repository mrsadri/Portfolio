## Issue Log

- **Issue ID:** 001
- **Title:** Certified badge image fails to load in production
- **Description:** The `Certified badge` image is missing in the production build due to an incorrect asset location reference.
- **Causation:** Asset was imported via a relative bundle path, so GitHub Pages requested `/Portfolio/certified-badge-*.png` which didn’t exist in the public asset tree.
- **Solution Summary:** Relocated the badge asset to `images/badges/` and updated the home hero component to build the asset URL from `import.meta.env.BASE_URL`, ensuring the image resolves for both local dev and the GitHub Pages subdirectory.
- **Local Status:** ✅ Build completed successfully (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** Linting blocked in sandbox (`EPERM` accessing `path-key`). Awaiting production confirmation after deploy.

- **Issue ID:** 002
- **Title:** Deep refresh on contact route returns GitHub Pages 404
- **Description:** Reloading `/contact` (and other nested routes) on production served the GitHub Pages 404 instead of the SPA.
- **Causation:** GitHub Pages serves static files only; without per-route HTML fallbacks, direct requests bypassed the SPA bundle and hit the platform’s default 404 page.
- **Solution Summary:** Added SPA fallback HTML files for key routes during the build step so direct navigation redirects back to the root app with the intended path persisted.
- **Local Status:** ✅ Build regenerated with new fallbacks (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** Please redeploy and confirm `/contact`, `/my-story`, `/resume`, and both `/case-studies/*` paths load correctly after a hard refresh.

- **Issue ID:** 003
- **Title:** Production homepage renders blank white screen
- **Description:** The live homepage loads HTML but all module scripts return 404, leaving users with a blank page.
- **Causation:** GitHub Pages didn’t serve the primary `main.js` bundle under any of the loader’s candidate paths (`/Portfolio/client/main.js`, `/Portfolio/dist/main.js`, etc.), so none of the SPA assets executed.
- **Solution Summary:** Copied the compiled bundle (`main.js`, `main.js.map`, `main.css`) into the `docs/` root and expanded the loader fallback list to include `/Portfolio/main.js` and relative `main.js`, guaranteeing at least one accessible script URL.
- **Local Status:** ✅ Build regenerated with updated asset copies (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** After publishing `docs/`, verify that `/Portfolio/main.js` and `/Portfolio/client/chunk-*.js` resolve and the homepage boots normally.

