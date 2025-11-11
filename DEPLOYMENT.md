# Deployment Guide

## Quick Deployment Steps

### Option 1: GitHub Pages (current production setup)
1. Run `bun run build` to generate the static site inside `docs/`.
2. Commit all files, including the updated `docs/` contents.
3. In GitHub → *Settings* → *Pages*, select your default branch and the `/docs` folder.
4. Once the Pages workflow completes, visit `https://mrsadri.github.io/Portfolio/`.

### Option 2: Netlify
1. Create an account at [netlify.com](https://netlify.com).
2. Drag and drop the `docs/` directory or connect the repo and set the build command to `bun run build`, publish directory `docs`.
3. Configure a custom domain under *Site settings → Domain management* (optional).

### Option 3: Vercel
1. Install Vercel CLI: `npm i -g vercel`.
2. Run `vercel` (or use the dashboard) with build command `bun run build` and output directory `docs`.
3. Follow the prompts to deploy.

### Option 4: Traditional Web Hosting
1. Upload the files inside `docs/` via FTP/SFTP.
2. Ensure `index.html` resides at the web root and that SPA fallbacks are configured (e.g., map 404s to `index.html`).

## Post-Deployment Checklist

- [ ] Run `bun run lint` (type + unused checks) and ensure it passes
- [ ] Test all top-level routes (Home, My Story, Case Studies, Resume, Contact)
- [ ] Verify lazy-loaded assets render when scrolled into view
- [ ] Test PDF/download CTA on resume page
- [ ] Check mobile responsiveness and navigation drawer
- [ ] Verify contact email and external links
- [ ] Test recap modals on case studies
- [ ] Submit sitemap to Google Search Console (if domain changes)
- [ ] Configure custom domain & HTTPS (if applicable)
- [ ] Measure performance via PageSpeed Insights / Lighthouse

## Output Structure after `bun run build`

```
docs/
├── 404.html
├── index.html
├── robots.txt
├── sitemap.xml
├── .nojekyll
├── dist/
│   └── [JavaScript bundles emitted by Bun]
└── images/
    └── [...portfolio assets]
```

## Important Notes

- All paths are relative, so the build works at `https://mrsadri.github.io/Portfolio/`.
- When served from GitHub Pages the app automatically falls back to hash-based URLs (`/#/route`) to prevent refresh 404s. Canonical tags still point to clean paths, but if you need extensionless URLs at runtime you’ll need a host that supports SPA rewrites (e.g. Netlify/Vercel).
- `404.html` mirrors `index.html` to provide SPA fallback on GitHub Pages.
- `.nojekyll` prevents GitHub Pages from stripping files that begin with underscores.
- If you customise the domain later, remember to update `index.html`, `sitemap.xml`, and `robots.txt` with the new canonical URL.

## Custom Domain Setup

1. Purchase domain (e.g., masihsadri.com)
2. Configure DNS records:
   - For Netlify: Add CNAME record pointing to your Netlify URL
   - For Vercel: Add A record or CNAME as instructed
   - For GitHub Pages: Add CNAME file to repository
3. Enable SSL/HTTPS (usually automatic on modern platforms)
4. Update sitemap.xml and robots.txt with your domain

## Performance Optimization (Optional)

- Bun already minifies and code-splits the JavaScript bundles.
- Enable gzip/brotli compression if your hosting platform allows it.
- Configure caching headers so static assets can be cached aggressively.

## Monitoring

- Set up Google Analytics (optional)
- Monitor error logs
- Track page performance
- Check search engine indexing status

