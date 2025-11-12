 ## Issue Log

- **Issue ID:** 001
- **Title:** Certified badge image fails to load in production
- **Description:** The `Certified badge` image is missing in the production build due to an incorrect asset location reference.
- **Causation:** Asset was imported via a relative bundle path, so GitHub Pages requested `/Portfolio/certified-badge-*.png` which didn’t exist in the public asset tree.
- **Solution Summary:** Relocated the badge asset to `images/badges/` and updated the hero to load it via the GitHub Pages-aware base path so the image resolves in all environments.
- **Local Status:** ✅ Build completed successfully (`bun run build`)
- **Production Status:** ✅ Verified (2025‑11‑11)
- **Notes:** Badge renders correctly on production at `https://mrsadri.github.io/Portfolio/images/badges/certified-badge.png`.

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
- **Solution Summary:** Implemented smooth-scrolling hero CTA, `/contact#mentorship` deep link with on-load scrolling, Zeeg scheduling links, trimmed hero actions, and redesigned contact footer CTAs.
- **Local Status:** ✅ Build updated locally
- **Production Status:** ❌ Legacy content still live (checked 2025‑11‑12)
- **Notes:** Hero still shows credential stack/legacy CTAs, contact page retains mailto links, and footer copy unchanged; redeploy required to publish refreshed experience.

- **Issue ID:** 006
- **Title:** Production site out of sync with local updates
- **Description:** Local build reflects refreshed hero CTAs, footer copy, and contact CTAs, but production still serves the legacy bundle.
- **Causation:** The `docs/` deployment artifacts were not regenerated after recent content updates, so GitHub Pages continued serving stale assets.
- **Solution Summary:** Ran `bun run build` to rebuild the static site and refresh `docs/`, `docs/client/`, and `client/` with the latest bundle, preparing the repo for redeploy.
- **Local Status:** ✅ Build regenerated (`bun run build` on 2025-11-12)
- **Production Status:** ⏳ Awaiting GitHub Pages publish once changes are pushed
- **Notes:** After pushing the updated artifacts, verify at `https://mrsadri.github.io/Portfolio/` that hero CTAs, contact section, and footer match the local build.

- **Issue ID:** 007
- **Title:** Mentorship section scroll feels abrupt
- **Description:** Navigating to `/contact#mentorship` or clicking the mentorship CTA triggers an almost instant jump to the section instead of a gradual scroll.
- **Causation:** The previous implementation relied on `element.scrollIntoView({ behavior: "smooth" })`, which defaults to ~300ms travel time and renders as a rapid jump on longer pages.
- **Solution Summary:** Added a reusable `smoothScrollToElement` helper with eased animation and ~900ms duration, and updated hero/contact flows to use it for more natural motion.
- **Local Status:** ⏳ Pending manual QA in browser (typecheck passes in sandbox)
- **Production Status:** ❌ Not yet shipped (awaits deploy)
- **Notes:** After deployment, click “Book a call” on the hero and reload `/contact#mentorship` to confirm the eased scroll behavior.