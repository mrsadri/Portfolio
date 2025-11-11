## Issue Log

- **Issue ID:** 001
- **Title:** Certified badge image fails to load in production
- **Description:** The `Certified badge` image is missing in the production build due to an incorrect asset location reference.
- **Causation:** Asset was imported via a relative bundle path, so GitHub Pages requested `/Portfolio/certified-badge-*.png` which didn’t exist in the public asset tree.
- **Solution Summary:** Relocated the badge asset to `images/badges/` and updated the home hero component to build the asset URL from `import.meta.env.BASE_URL`, ensuring the image resolves for both local dev and the GitHub Pages subdirectory.
- **Local Status:** ✅ Build completed successfully (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** Linting blocked in sandbox (`EPERM` accessing `path-key`). Production still missing redeploy with updated badge path; `https://mrsadri.github.io/Portfolio/images/badges/certified-badge.png` returns 404 as of 2025‑11‑11.

- **Issue ID:** 002
- **Title:** Deep refresh on contact route returns GitHub Pages 404
- **Description:** Reloading `/contact` (and other nested routes) on production served the GitHub Pages 404 instead of the SPA.
- **Causation:** GitHub Pages serves static files only; without per-route HTML fallbacks, direct requests bypassed the SPA bundle and hit the platform’s default 404 page.
- **Solution Summary:** Added SPA fallback HTML files for key routes during the build step so direct navigation redirects back to the root app with the intended path persisted.
- **Local Status:** ✅ Build regenerated with new fallbacks (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** Awaiting production rollout—`https://mrsadri.github.io/Portfolio/contact` still serving GitHub Pages 404 (checked 2025‑11‑11).

- **Issue ID:** 003
- **Title:** Production homepage renders blank white screen
- **Description:** The live homepage loads HTML but all module scripts return 404, leaving users with a blank page.
- **Causation:** GitHub Pages didn’t serve the primary `main.js` bundle under any of the loader’s candidate paths (`/Portfolio/client/main.js`, `/Portfolio/dist/main.js`, etc.), so none of the SPA assets executed.
- **Solution Summary:** Publish the built assets to a root-level `client/` directory (mirroring the bundler `publicPath`) while keeping copies under `docs/`, and keep the expanded loader fallback so chunks resolve whether GitHub Pages serves from `/client` or `/docs/client`.
- **Local Status:** ✅ Build regenerated with updated asset copies (`bun run build`)
- **Production Status:** Pending verification
- **Notes:** Verification pending—`https://mrsadri.github.io/Portfolio/client/main.js` still 404 (checked 2025‑11‑11).

