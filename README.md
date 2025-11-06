# Masih Sadri - Portfolio Website

A professional portfolio website showcasing product design work, case studies, and experience.

## Features

- **Responsive Design**: Fully responsive across all device sizes
- **Accessibility**: WCAG AA compliant with proper ARIA labels and keyboard navigation
- **SEO Optimized**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Performance**: Optimized images (WebP/AVIF), lazy loading, and efficient CSS
- **Case Studies**: Detailed case studies with interactive elements
- **Resume**: Interactive resume with PDF download functionality

## Structure

```
/
├── index.html              # Homepage
├── my-story.html           # About me page
├── contact.html            # Contact page
├── resume.html             # Resume page
├── css/
│   ├── base.css           # Base styles and variables
│   ├── portfolio.css      # Homepage and shared styles
│   ├── case-study.css     # Case study specific styles
│   └── resume.css         # Resume page styles
├── js/
│   ├── navigation.js      # Mobile navigation
│   ├── animations.js      # Scroll animations
│   ├── recap-modal.js     # Case study recap modal
│   └── resume-pdf.js      # PDF generation
├── images/                # Optimized images
├── case-studies/          # Case study pages
├── robots.txt             # Search engine directives
├── sitemap.xml            # Site structure for search engines
└── README.md              # This file
```

## Deployment

This website is ready to be deployed to any static hosting service:

- **Netlify**: Drag and drop the folder or connect via Git
- **Vercel**: Connect repository or deploy via CLI
- **GitHub Pages**: Push to repository and enable Pages
- **AWS S3**: Upload files to S3 bucket with static hosting enabled

### Recommended Hosting

1. Upload all files to your hosting service
2. Ensure `index.html` is in the root directory
3. Configure custom domain (optional)
4. Enable HTTPS (recommended)
5. Set up redirects if needed (e.g., `www` to non-`www`)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

- Images optimized with WebP/AVIF formats
- Lazy loading for below-the-fold images
- Minified CSS and JavaScript (recommended for production)
- Efficient animations with `prefers-reduced-motion` support

## SEO

- Semantic HTML5 structure
- Meta descriptions and Open Graph tags
- JSON-LD structured data
- XML sitemap
- robots.txt configured
- Canonical URLs

## Accessibility

- WCAG AA compliant
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Skip links
- Proper heading hierarchy
- Alt text for all images

## License

© 2025 Masih Sadri. All rights reserved.

