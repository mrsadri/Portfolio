# Deployment Guide

## Quick Deployment Steps

### Option 1: Netlify (Recommended)
1. Create account at [netlify.com](https://netlify.com)
2. Drag and drop this entire folder to Netlify dashboard
3. Your site will be live instantly with a `.netlify.app` URL
4. Configure custom domain in Netlify settings

### Option 2: Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in this directory
3. Follow prompts to deploy

### Option 3: GitHub Pages (docs folder)
1. Create a new GitHub repository
2. Run `bun run build` to generate the `docs/` folder
3. Commit the entire project (including `docs/`)
4. Enable Pages in repository settings and choose `main` (or your default branch) with `/docs`

### Option 4: Traditional Web Hosting
1. Upload all files via FTP/SFTP to your web server
2. Ensure `index.html` is in the root directory
3. Set proper file permissions (644 for files, 755 for directories)

## Post-Deployment Checklist

- [ ] Test all pages load correctly
- [ ] Verify all images display
- [ ] Test PDF download on resume page
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify contact email links work
- [ ] Test recap modals on case studies
- [ ] Submit sitemap to Google Search Console
- [ ] Configure custom domain (if applicable)
- [ ] Enable HTTPS/SSL
- [ ] Test page load speed (PageSpeed Insights)

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

