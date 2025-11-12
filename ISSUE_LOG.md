 ## Issue Log

- **Issue ID:** 001
- **Title:** Certified badge image fails to load in production
- **Description:** The `Certified badge` image is missing in the production build due to an incorrect asset location reference.
- **Causation:** Asset was imported via a relative bundle path, so GitHub Pages requested `/Portfolio/certified-badge-*.png` which didn’t exist in the public asset tree.
- **Solution Summary:** Relocated the badge asset to `images/badges/` and updated the home hero component to build the asset URL from `import.meta.env.BASE_URL`, ensuring the image resolves for both local dev and the GitHub Pages subdirectory.
- **Local Status:** ✅ Build completed successfully (`bun run build`)
- **Production Status:** ✅ Verified (2025‑11‑11)
- **Notes:** Linting blocked in sandbox (`EPERM` accessing `path-key`). Badge confirmed loading from `https://mrsadri.github.io/Portfolio/images/badges/certified-badge.png`.

- **Issue ID:** 002
- **Title:** Deep refresh on contact route returns GitHub Pages 404
- **Description:** Reloading `/contact` (and other nested routes) on production served the GitHub Pages 404 instead of the SPA.
- **Causation:** GitHub Pages serves static files only; without per-route HTML fallbacks, direct requests bypassed the SPA bundle and hit the platform’s default 404 page.
- **Solution Summary:** Added SPA fallback HTML files for key routes during the build step so direct navigation redirects back to the root app with the intended path persisted.
- **Local Status:** ✅ Build regenerated with new fallbacks (`bun run build`)
- **Production Status:** ✅ Verified (2025‑11‑11 after redeploy)
- **Notes:** `/Portfolio/contact` now redirects back into the SPA and renders the Contact page after a hard refresh. Local static verification blocked in sandbox (no localhost access).

- **Issue ID:** 003
- **Title:** Production homepage renders blank white screen
- **Description:** The live homepage loads HTML but all module scripts return 404, leaving users with a blank page.
- **Causation:** GitHub Pages didn’t serve the primary `main.js` bundle under any of the loader’s candidate paths (`/Portfolio/client/main.js`, `/Portfolio/dist/main.js`, etc.), so none of the SPA assets executed.
- **Solution Summary:** Publish the built assets to a root-level `client/` directory (mirroring the bundler `publicPath`) while keeping copies under `docs/`, and keep the expanded loader fallback so chunks resolve whether GitHub Pages serves from `/client` or `/docs/client`.
- **Local Status:** ✅ Build regenerated with updated asset copies (`bun run build`)
- **Production Status:** ✅ Verified (2025‑11‑11)
- **Notes:** `/Portfolio/client/main.js` and SPA load confirmed on production. Keep new `client/` directory in source control.

- **Issue ID:** 004
- **Title:** Random paths show GitHub default 404 instead of custom SPA fallback
- **Description:** Visiting unknown routes like `/ddd` served GitHub’s stock 404 page, so the React app could not display its NotFound view.
- **Causation:** GitHub Pages couldn’t find our redirecting 404 document because it only existed under `docs/`; requests to `/Portfolio/404.html` failed, leaving the platform to render its default error page.
- **Solution Summary:** Copy the generated `404.html` to both `docs/` and repository root during the build, ensuring GitHub Pages serves the custom redirector for any missing path.
- **Local Status:** ✅ Build regenerated (`bun run build`)
- **Production Status:** ✅ Verified (2025‑11‑11)
- **Notes:** `/Portfolio/404.html` now serves the redirect HTML and random routes (e.g. `/Portfolio/ddd`) land on the SPA NotFound view instead of the GitHub fallback.

- **Issue ID:** 005
- **Title:** Refresh homepage engagement touchpoints
- **Description:** Updated hero CTAs, mentorship scheduling, and contact footer to align with current offerings and booking links.
- **Causation:** Legacy copy and mailto links left visitors without clear actions and routed them to outdated scheduling experiences.
- **Solution Summary:** Added smooth-scrolling hero CTA, deep-linked mentorship navigation, Zeeg scheduling links, refreshed contact footer buttons, and supporting content updates.
- **Local Status:** ✅ Build updated locally
- **Production Status:** ⏳ Pending redeploy
- **Notes:** Contact footer now highlights `hello@uxdesigner.com` with LinkedIn and GitHub for follow-up.