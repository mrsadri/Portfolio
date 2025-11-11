## Refactor Plan (Phase A)

| # | Task | Scope / Key Files | Effort | Risk |
|---|------|-------------------|--------|------|
| 1 | Stabilize Bun dev server bootstrap (resilient port + logging) | `index.ts`, `scripts/build.ts` | Small | Medium |
| 2 | Audit global providers & hydration; add guardrails for StrictMode double render | `src/main.tsx`, `src/app/providers/AppProviders.tsx` | Small | Low |
| 3 | Harden router basename + error boundaries for GitHub Pages fallback | `src/app/router.tsx`, `src/shared/layout/MainLayout.tsx` | Medium | Medium |
| 4 | Centralize SEO utilities & typed metadata contracts | `src/shared/components/Seo.tsx`, `src/types/seo.ts` | Medium | Low |
| 5 | Consolidate shared UI primitives and remove legacy duplicates | `src/shared/components/*`, `src/components/*`, new `src/shared/ui/*` | Medium | Medium |
| 6 | Split oversized feature components into logic + presentation with hooks | `src/features/home/*`, `src/features/my-story/*` | Medium | Medium |
| 7 | Strengthen TypeScript models for content data & guard external assets | `src/features/**/data.ts`, `src/types/*` | Small | Low |
| 8 | Establish baseline tests & lint refinements (React Testing Library + ESLint config review) | `package.json`, `tests/**`, `.eslintrc.*` | Medium | Medium |

**Notes**
- All tasks preserve current visual design; any UI adjustments will be tied to bug fixes only.
- Testing additions will target router stability and at least one hero/feature component.

### Progress Log
- 2025-11-11: Task 1 completed — updated `index.ts` to retry candidate ports with clearer diagnostics before falling back to an ephemeral port (sandbox still blocks opening sockets, but change tested via `tsc`).

