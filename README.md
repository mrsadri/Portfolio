# Masih Sadri - Portfolio

Personal portfolio website showcasing UX design work.

## Quick Start

```bash
# Install dependencies
bun install

# Development
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Deployment

The site deploys automatically to GitHub Pages when you push to `main`.

**Manual deploy:**
```bash
bun run deploy
```

## Tech Stack

- React 19 + TypeScript
- Vite
- Material UI
- React Router

## Project Structure

```
src/
├── app/         # App shell, routing
├── features/    # Feature modules (home, case-studies, etc.)
├── shared/      # Shared components and utilities
└── theme/       # MUI theme configuration
```
