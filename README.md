# Masih Sadri — Product Designer Portfolio

A personal portfolio website built with **pure HTML, CSS, and JavaScript** — no frameworks, no build tools, no dependencies. Just fast, maintainable, and fully hand-crafted code.

## What's inside

| Page | Purpose |
|------|---------|
| `index.html` | Homepage — hero, metrics, case study cards, testimonials |
| `resume.html` | CV / Resume with downloadable PDF |
| `my-story.html` | Personal story, design philosophy, photo gallery |
| `contact.html` | Contact form |
| `case-studies/divar-secure-call.html` | Divar Secure Call — deep-dive case study |
| `case-studies/setare-aval-engagement.html` | Setare Aval engagement case study |
| `case-studies/setare-yek-bill-payment.html` | Setare Yek bill payment case study |

## Stack

- **HTML5** — semantic, accessible markup
- **CSS3** — custom properties (design tokens), Flexbox, Grid, `clamp()` for fluid type
- **Vanilla JS** — scroll animations, collapsible code blocks, copy-to-clipboard
- **Bootstrap Icons** — icon set via CDN (no JS, only SVG icons used)
- **Google Fonts** — Inter typeface

## CSS architecture

```
css/
├── variables.css     # Design tokens (colors, spacing, radius, shadows)
├── base.css          # Reset, body, typography defaults
├── layout.css        # Container, section wrapper, shared grid patterns
├── components.css    # Reusable components (buttons, badges, cards, tags)
├── animations.css    # Scroll-triggered fade-up / delay utilities
├── home.css          # Homepage-specific styles
├── resume.css        # Resume page styles
├── my-story.css      # My Story page styles
├── contact.css       # Contact page styles
└── case-study.css    # Shared case study styles
```

## Running locally

No build step needed — just open any HTML file in a browser:

```bash
# Option 1: open directly
open index.html

# Option 2: serve with any static server (avoids some CORS quirks)
npx serve .
# or
python3 -m http.server 8000
```

## Key design decisions

- **Zero dependencies** — no React, no Tailwind, no bundler. Every byte is intentional.
- **Design tokens** — all colors, radii, and shadows live in `css/variables.css`; theming is one-file change.
- **Collapsible SQL blocks** — case studies embed real SQL queries; they're collapsed by default and expand on click with syntax highlighting.
- **Key findings cards** — reusable `.cs-key-findings` component used across all case studies to surface insights consistently.
- **Fluid typography** — `clamp()` on all headings; no media-query breakpoints needed for type scaling.

## Deployment

The site is deployed via **GitHub Pages** from the `main` branch of [mrsadri/Portfolio](https://github.com/mrsadri/Portfolio).

---

Built by [Masih Sadri](https://www.linkedin.com/in/masihsadri/) · sadrimasih@gmail.com
