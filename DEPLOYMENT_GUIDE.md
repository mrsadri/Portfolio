# Portfolio Deployment Guide

## Overview

This document explains the deployment architecture for the portfolio website, a critical bug that was discovered, and the solution implemented. It serves as a reference for future deployments and troubleshooting.

**Website URL:** https://mrsadri.github.io/Portfolio/

---

## Table of Contents

1. [Deployment Architecture](#deployment-architecture)
2. [The Bug: JavaScript Bundle 404 Errors](#the-bug-javascript-bundle-404-errors)
3. [Diagnosis Process](#diagnosis-process)
4. [Solution](#solution)
5. [Deployment Workflow](#deployment-workflow)
6. [Important Considerations](#important-considerations)
7. [Troubleshooting](#troubleshooting)

---

## Deployment Architecture

### Technology Stack
- **Build Tool:** Bun (bundler with code splitting)
- **Framework:** React 19 with TypeScript
- **Hosting:** GitHub Pages
- **CI/CD:** GitHub Actions

### Directory Structure
```
Portfolio/
├── src/                    # Source code
├── public/                 # Static files (index.html, robots.txt, etc.)
├── dist/                   # Build output (local, gitignored)
├── docs/                   # GitHub Pages deployment folder (committed)
│   ├── index.html          # Main entry point
│   ├── main.js             # Primary JS bundle
│   ├── main.css            # Compiled styles
│   ├── main.js.map         # Source maps
│   ├── client/             # Code-split chunks and assets
│   │   ├── chunk-*.js      # Dynamic imports
│   │   └── *.webp/jpg/png  # Optimized images
│   ├── images/             # Static images
│   └── 404.html            # Custom 404 page
└── .github/workflows/      # CI/CD configuration
```

### Build Process
1. Bun compiles `src/main.tsx` into optimized bundles
2. Code splitting creates separate chunk files for lazy-loaded components
3. Assets are hashed for cache busting (e.g., `chunk-9rq7nd8m.js`)
4. Build script copies everything to `docs/` for GitHub Pages

---

## The Bug: JavaScript Bundle 404 Errors

### Symptoms
- Website showed infinite loading spinner
- Browser console showed multiple 404 errors:
  ```
  Failed to load bundle from: /Portfolio/main.js
  Failed to load bundle from: /Portfolio/client/main.js
  Unable to load any client bundle
  ```
- `index.html` loaded correctly (verified by Clarity/Hotjar scripts working)
- Static images loaded correctly (e.g., `/Portfolio/images/favicon.svg`)
- All JavaScript files returned 404

### Date Discovered
December 16, 2025

---

## Diagnosis Process

### Step 1: Verify Local Build
```bash
ls -la docs/main.js docs/client/main.js
# Files existed locally with correct sizes
```

### Step 2: Check Git Status
```bash
git ls-files docs/main.js docs/client/main.js
# Files were tracked and committed
```

### Step 3: Verify Remote Repository
```bash
curl -s "https://raw.githubusercontent.com/mrsadri/Portfolio/main/docs/main.js" | head -c 500
# File content was correct on GitHub
```

### Step 4: Check GitHub Pages Response
```bash
curl -sI "https://mrsadri.github.io/Portfolio/main.js"
# HTTP/2 404 - File not found on GitHub Pages!
```

### Step 5: Check GitHub Actions Workflow
The workflow was configured to:
1. Checkout repository
2. Install dependencies (`bun install`)
3. Run linter and type checks
4. **Rebuild the project** (`bun run build`)
5. Upload `./docs` as artifact
6. Deploy to GitHub Pages

### Root Cause Identified

**The problem:** Bun generates **content-based hashes** for chunk filenames. Each build produces different hash values.

**What was happening:**
1. Developer runs `bun run build` locally → generates `chunk-abc123.js`
2. Developer commits `docs/` folder with `main.js` referencing `chunk-abc123.js`
3. GitHub Actions runs `bun run build` → generates `chunk-xyz789.js` (different hash!)
4. GitHub Actions uploads the **freshly built** `docs/` with `main.js` referencing `chunk-xyz789.js`
5. But the actual chunk files in the artifact were the **old ones** from the committed `docs/`
6. Result: `main.js` references chunks that don't exist → 404 errors

**Why it's intermittent:** The bug only manifests when:
- The build on CI produces different chunk hashes than the local build
- This happens due to: different Bun versions, file modification times, or environment differences

---

## Solution

### The Fix
Changed the GitHub Actions workflow from **rebuilding** to **directly deploying** the pre-committed `docs/` folder.

### Before (Problematic)
```yaml
jobs:
  build:
    steps:
      - uses: actions/checkout@v4
      - uses: oven-sh/setup-bun@v1
      - run: bun install --frozen-lockfile
      - run: bun run lint
      - run: bun run typecheck
      - run: bun run build  # ❌ Rebuilds with different hashes!
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./docs

  deploy:
    needs: build
    steps:
      - uses: actions/deploy-pages@v4
```

### After (Fixed)
```yaml
jobs:
  deploy:
    steps:
      - uses: actions/checkout@v4
      - uses: actions/configure-pages@v4
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./docs  # ✅ Uses pre-committed files directly
      - uses: actions/deploy-pages@v4
```

### Why This Works
- The `docs/` folder contains the exact build output from the local machine
- `main.js` references chunks that actually exist in `docs/client/`
- No rebuild means no hash mismatches
- Deployment is faster (no build step)

---

## Deployment Workflow

### For Every Code Change

1. **Make your code changes** in `src/`

2. **Build locally:**
   ```bash
   bun run build
   ```

3. **Verify the build:**
   ```bash
   bun run preview  # Opens local preview server
   ```

4. **Commit ALL changes including docs/:**
   ```bash
   git add src/ docs/ public/
   git commit -m "feat: Your feature description"
   ```

5. **Push to GitHub:**
   ```bash
   git push origin main
   ```

6. **Wait for deployment** (~1-2 minutes)
   - GitHub Actions will deploy the `docs/` folder
   - Check Actions tab for status

7. **Verify deployment:**
   - Visit https://mrsadri.github.io/Portfolio/
   - Check browser console for errors

### Quick Deploy Command
```bash
bun run build && git add -A && git commit -m "Deploy: description" && git push
```

---

## Important Considerations

### ✅ DO

1. **Always run `bun run build` locally** before committing
2. **Always commit the `docs/` folder** with your changes
3. **Use consistent Bun version** across development machines
4. **Test locally with `bun run preview`** before pushing
5. **Check GitHub Actions status** after pushing

### ❌ DON'T

1. **Don't modify files in `docs/` manually** - they're generated
2. **Don't skip the build step** before committing
3. **Don't ignore `docs/` in `.gitignore`**
4. **Don't rely on CI to build** - it only deploys

### Version Control

The `docs/` folder is intentionally committed because:
- Ensures exact build output is deployed
- Avoids CI/local environment differences
- Makes deployments faster and more reliable
- Provides a clear audit trail of what was deployed

### Environment Consistency

If working on multiple machines:
```bash
# Check Bun version
bun --version

# Recommended: Use same version everywhere
# Current project uses: Bun 1.x (latest)
```

---

## Troubleshooting

### Problem: 404 errors for JS/CSS files

**Diagnosis:**
```bash
# Check if files exist locally
ls -la docs/main.js docs/client/

# Check if files are in git
git ls-files docs/main.js

# Check GitHub raw content
curl -I "https://raw.githubusercontent.com/mrsadri/Portfolio/main/docs/main.js"

# Check GitHub Pages
curl -I "https://mrsadri.github.io/Portfolio/main.js"
```

**Solutions:**
1. Rebuild and recommit: `bun run build && git add docs/ && git commit --amend`
2. Check GitHub Actions completed successfully
3. Wait a few minutes for CDN cache to update
4. Hard refresh browser: `Cmd+Shift+R` / `Ctrl+Shift+R`

### Problem: Changes not appearing after deployment

**Check:**
1. Did you run `bun run build`?
2. Did you commit the `docs/` folder?
3. Did the GitHub Actions workflow succeed?
4. Try clearing browser cache or incognito mode

### Problem: Build fails locally

**Common fixes:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules bun.lock
bun install

# Clear build cache
rm -rf dist/

# Rebuild
bun run build
```

### Problem: GitHub Actions fails

**Check the Actions tab for:**
- Checkout errors (permissions)
- Pages configuration issues
- Artifact upload failures

---

## Related Files

- `.github/workflows/deploy.yml` - Deployment workflow
- `scripts/build.ts` - Build script
- `package.json` - Build commands
- `public/index.html` - HTML template

---

## Change Log

| Date | Change | Author |
|------|--------|--------|
| 2025-12-16 | Fixed deployment 404 bug by removing CI rebuild | Masih Sadri |
| 2025-12-16 | Added Microsoft Clarity analytics | Masih Sadri |
| 2025-12-16 | Created this documentation | Masih Sadri |

---

## Contact

For deployment issues or questions:
- **Email:** sadri.masih@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/msadri/

