# Masih Sadri — Portfolio (React + MUI)

A Bun-powered React application that showcases Masih Sadri’s product design work, case studies, and experience. The UI is built entirely with [MUI](https://mui.com/) components and a custom design theme, providing a consistent, accessible experience across the site.

## Highlights

- **Modern stack** – React 19, React Router 7, Bun runtime, and the latest MUI packages.
- **Design system** – Centralised theming (`src/theme`) with responsive typography and brand palette extensions.
- **Content architecture** – Page content modelled as structured data (`src/data`) and rendered through reusable view components.
- **Performance-first** – No CSS bundles; everything ships through tree-shaken MUI components and optimized images.
- **Routing** – Browser history routing with automatic GitHub Pages base-path detection.
- **Accessibility** – Semantic structure, skip links, focus management, and keyboard-friendly navigation.

## Project Structure

```
/
├── index.html            # Bun-served HTML shell
├── index.ts              # Bun edge server for static assets + SPA fallback
├── src/
│   ├── main.tsx          # React root + ThemeProvider
│   ├── App.tsx           # Router configuration (lazy-loaded routes)
│   ├── theme/            # Custom MUI theme + palette extensions
│   ├── layout/           # Layout primitives (shell, navigation, footer)
│   ├── components/       # Shared UI elements (loading, footer, etc.)
│   ├── routes/           # Page-level React components
│   ├── data/             # Structured content for pages/case studies/resume
│   └── types/            # Asset typing helpers
├── images/               # Optimized image assets referenced by React
├── sitemap.xml           # GitHub Pages sitemap
├── robots.txt
├── scripts/
│   └── build.ts          # Bundled build + GitHub Pages export pipeline
├── package.json
├── bun.lock
└── README.md
```

## Development

### Prerequisites

- [Bun](https://bun.sh/) ≥ 1.1
- Node.js is **not** required; Bun manages the toolchain.

### Setup

```bash
bun install
```

### Commands

```bash
# Start the Bun dev server and React app
bun run dev

# Build the production bundle and export to /docs for GitHub Pages
bun run build

# Lint TypeScript + check types
bun run lint
```

The default dev server runs on [`http://localhost:3000`](http://localhost:3000) with automatic recompilation provided by Bun.

## Deployment

The build script now produces two artefacts:

- `dist/` – optimised JavaScript chunks used by the Bun dev server.
- `docs/` – a self-contained static site ready to publish on GitHub Pages.

### Deploying to GitHub Pages (https://mrsadri.github.io/Portfolio/)

1. Build the project:
   ```bash
   bun run build
   ```
2. Commit the generated `docs/` folder to the repository.
3. In GitHub → *Settings* → *Pages*, set the source to `main` (or your default branch) and the `/docs` folder.
4. Visit `https://mrsadri.github.io/Portfolio/` once the Pages build completes.

### Deploying elsewhere

If you prefer another static host, upload the contents of `docs/` (including the nested `dist/` and `images/` folders). The SPA fallback is handled via the duplicated `index.html`/`404.html` pair.

## Browser Support

- Chrome, Edge, Safari, Firefox (latest stable releases)
- iOS Safari, Chrome for Android

## Accessibility & SEO

- WCAG AA-informed colour contrast and focus states
- ARIA labelling for navigation, dialogs, and hero CTAs
- Skip-link support implemented in `MainLayout`
- Complete meta tags, Open Graph, and Twitter card data
- Updated `sitemap.xml` and `robots.txt`

## License

© 2025 Masih Sadri. All rights reserved.

