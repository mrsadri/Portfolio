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

## Getting Started

### Prerequisites

- A modern web browser
- A static hosting service (for deployment)

### Local Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd Portfolio
   ```

2. Open `index.html` in your browser or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js (with http-server)
   npx http-server
   ```

3. Visit `http://localhost:8000` in your browser

## Git Setup

This project is ready to be pushed to GitHub:

```bash
# Initialize Git repository
git init

# Add all files
git add .

# Create initial commit
git commit -m "Initial commit: Portfolio website"

# Rename branch to main
git branch -M main

# Add remote repository
git remote add origin <your-repo-url>

# Push to GitHub
git push -u origin main
```

## Project Status

✅ **Production Ready** - All reviews completed and issues resolved
- ✅ Senior UX Designer Review: Passed
- ✅ Hiring Manager Review: Passed  
- ✅ SEO Specialist Review: Passed
- ✅ Frontend Engineer Review: Passed

See `PROJECT_REVIEW.md` for detailed review documentation.

## License

© 2025 Masih Sadri. All rights reserved.

