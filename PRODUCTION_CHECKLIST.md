# Production Deployment Checklist

## ✅ Pre-Deployment Checklist

### Files & Structure
- [x] All HTML files are in correct locations
- [x] All CSS files are organized in `css/` directory
- [x] All JavaScript files are in `js/` directory
- [x] All images are optimized and in `images/` directory
- [x] `robots.txt` is configured
- [x] `sitemap.xml` is up to date
- [x] `.gitignore` is created (if using Git)

### Content
- [x] All meta tags are present and correct
- [x] Open Graph tags are configured
- [x] Twitter Card tags are configured
- [x] Canonical URLs are set
- [x] All images have alt text
- [x] All links are working
- [x] No placeholder content remains
- [x] No console.log statements in production code

### Images
- [x] Images optimized (WebP/AVIF where appropriate)
- [x] Lazy loading implemented for below-the-fold images
- [x] All image paths are correct
- [x] Image file extensions match references

### SEO
- [x] Semantic HTML5 structure
- [x] Proper heading hierarchy (h1, h2, h3)
- [x] Meta descriptions for all pages
- [x] JSON-LD structured data
- [x] XML sitemap includes all pages
- [x] robots.txt allows crawling

### Accessibility
- [x] ARIA labels on interactive elements
- [x] Skip links present
- [x] Keyboard navigation works
- [x] Focus indicators visible
- [x] Color contrast meets WCAG AA
- [x] Alt text on all images
- [x] Form labels associated

### Performance
- [x] Images optimized (WebP/AVIF)
- [x] Lazy loading implemented
- [x] CSS is organized and efficient
- [x] JavaScript is optimized
- [x] Animations respect `prefers-reduced-motion`

### Browser Testing
- [ ] Tested in Chrome (latest)
- [ ] Tested in Firefox (latest)
- [ ] Tested in Safari (latest)
- [ ] Tested in Edge (latest)
- [ ] Tested on mobile devices (iOS/Android)
- [ ] Tested responsive breakpoints

### Functionality
- [ ] Mobile navigation works
- [ ] All links work correctly
- [ ] PDF download works (resume page)
- [ ] Recap modals work
- [ ] Animations work smoothly
- [ ] Forms work (if any)

### Security
- [ ] HTTPS enabled (on hosting)
- [ ] External links have `rel="noopener noreferrer"`
- [ ] No sensitive data in code
- [ ] CSRF protection (if forms)

## Deployment Steps

1. **Choose Hosting Service**
   - Netlify (recommended for static sites)
   - Vercel
   - GitHub Pages
   - AWS S3 + CloudFront

2. **Upload Files**
   - Upload all files maintaining directory structure
   - Ensure `index.html` is in root

3. **Configure Domain**
   - Set up custom domain (masihsadri.com)
   - Configure DNS records
   - Enable HTTPS/SSL

4. **Configure Redirects** (if needed)
   - `www` to non-`www` or vice versa
   - Old URLs to new URLs

5. **Test After Deployment**
   - Check all pages load
   - Test all functionality
   - Verify images load
   - Check mobile responsiveness
   - Test performance (PageSpeed Insights)

6. **Submit to Search Engines**
   - Submit sitemap to Google Search Console
   - Submit sitemap to Bing Webmaster Tools
   - Verify ownership

## Post-Deployment

### Monitoring
- [ ] Set up Google Analytics (if desired)
- [ ] Monitor error logs
- [ ] Check performance metrics
- [ ] Monitor search engine indexing

### Maintenance
- [ ] Keep content updated
- [ ] Update sitemap when adding pages
- [ ] Monitor broken links
- [ ] Update dependencies (if any)

## File Structure for Deployment

```
/
├── index.html
├── my-story.html
├── contact.html
├── resume.html
├── robots.txt
├── sitemap.xml
├── .gitignore
├── README.md
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
│   ├── masih-sadri-profile.webp
│   ├── rahnema-students.webp
│   ├── morph-design-system.webp
│   └── [other images]
└── case-studies/
    ├── divar-secure-call.html
    └── setare-aval-engagement.html
```

## Notes

- All images should be optimized before deployment
- Consider minifying CSS/JS for production (optional)
- Test PDF generation on resume page
- Verify all external links work
- Check mobile navigation on all pages

