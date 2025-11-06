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

### Option 3: GitHub Pages
1. Create a new GitHub repository
2. Push all files to the repository
3. Enable Pages in repository settings
4. Select branch and folder (usually `main` and `/`)

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

## File Structure for Deployment

```
/
├── index.html
├── my-story.html
├── contact.html
├── resume.html
├── robots.txt
├── sitemap.xml
├── css/
│   ├── base.css
│   ├── portfolio.css
│   ├── case-study.css
│   └── resume.css
├── js/
│   ├── navigation.js
│   ├── animations.js
│   ├── recap-modal.js
│   └── resume-pdf.js
├── images/
│   └── [all image files]
└── case-studies/
    ├── divar-secure-call.html
    └── setare-aval-engagement.html
```

## Important Notes

- All images are optimized (WebP/AVIF format)
- External CDN is used for html2pdf.js library
- All paths are relative and will work on any hosting
- No build step required - pure HTML/CSS/JS
- Works on any static hosting service

## Custom Domain Setup

1. Purchase domain (e.g., masihsadri.com)
2. Configure DNS records:
   - For Netlify: Add CNAME record pointing to your Netlify URL
   - For Vercel: Add A record or CNAME as instructed
   - For GitHub Pages: Add CNAME file to repository
3. Enable SSL/HTTPS (usually automatic on modern platforms)
4. Update sitemap.xml and robots.txt with your domain

## Performance Optimization (Optional)

- Consider minifying CSS/JS files for production
- Enable gzip/brotli compression on your server
- Set up CDN for static assets
- Configure browser caching headers

## Monitoring

- Set up Google Analytics (optional)
- Monitor error logs
- Track page performance
- Check search engine indexing status

