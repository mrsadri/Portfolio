# GitHub Pages Deployment Guide

## Overview
This portfolio is configured to deploy to GitHub Pages from the `/docs` folder.

## How GitHub Pages Serves Files

**Critical Understanding**: When GitHub Pages is configured to serve from `/docs` folder:
- Files are **stored** in: `docs/client/main.js`
- Files are **accessed** at: `https://mrsadri.github.io/Portfolio/client/main.js`
- **GitHub Pages strips the `/docs` prefix** from all URLs

### Example Path Mapping
```
Repository Path              →  Web URL
─────────────────────────────────────────────────────────────────────
docs/index.html              →  /Portfolio/
docs/main.js                 →  /Portfolio/main.js
docs/client/chunk-xxx.js     →  /Portfolio/client/chunk-xxx.js
docs/images/photo.jpg        →  /Portfolio/images/photo.jpg
```

## Build Configuration

The `publicPath` in `scripts/build.ts` is set to `/Portfolio/client/` which means:
- All JavaScript chunks import from `/Portfolio/client/`
- This matches where files are accessible (NOT where they're stored)
- DO NOT set it to `/Portfolio/docs/client/` - that would be incorrect

## Pre-Deployment Checklist

### 1. Build the Project
```bash
bun run build
```

**Expected Output:**
```
🚧 Running static builder v2.2.0...
🧹 Cleaning up old build artifacts...
📦 Using asset public path derived from package.json homepage: /Portfolio/client/
   ℹ️  Files stored in docs/client/ will be accessible at /Portfolio/client/
📁 Copying build artifacts to docs/...
📄 Copied 1 PDF file(s) to docs/
✅ Build completed successfully!

📦 Deployment Structure:
   docs/
   ├── client/          # All JS chunks and assets
   ├── images/          # Image assets
   ├── index.html       # Main HTML entry
   ├── main.js          # Main JS bundle
   ├── main.css         # Main CSS bundle
   └── ...              # Other static files

🚀 Ready for GitHub Pages deployment from /docs folder
```

### 2. Verify Chunk Imports
Check that chunks reference the correct path:
```bash
head -1 docs/client/main.js
```

**Expected**: Should see imports like:
```javascript
import{c as H6}from"/Portfolio/client/chunk-9rq7nd8m.js";
```

**NOT**:
```javascript
import{c as H6}from"/Portfolio/docs/client/chunk-9rq7nd8m.js";  // ❌ WRONG
```

### 3. Verify Build Output Structure
```bash
ls -la docs/
```

**Expected Structure:**
```
docs/
├── 404.html
├── case-studies/
├── client/              # All JS chunks here
│   ├── chunk-*.js
│   ├── main.js
│   ├── main.css
│   └── images/
├── images/
├── index.html
├── main.js             # Copy at root level
├── main.css            # Copy at root level
├── Masih-Sadri-Resume.pdf
├── robots.txt
└── sitemap.xml
```

## Deployment Steps

### 1. Configure GitHub Pages
1. Go to repository **Settings** → **Pages**
2. Under **Source**, select:
   - **Branch**: `main` (or your default branch)
   - **Folder**: `/docs`
3. Click **Save**

### 2. Commit and Push
```bash
git add docs/
git commit -m "Build production bundle for deployment"
git push origin main
```

### 3. Wait for Deployment
- GitHub Pages typically takes 1-3 minutes to deploy
- Check deployment status in **Actions** tab or **Environments** section

## Verification After Deployment

### 1. Check Site Loads
Visit: `https://mrsadri.github.io/Portfolio/`

The site should load without errors.

### 2. Verify Chunks Load Correctly
Open browser DevTools:
- **Console tab**: Should have no errors about failed chunk loading
- **Network tab**: All chunk files should load with `200` status

**Look for**:
✅ `chunk-1q00nmqm.js` → `200 OK`
✅ `chunk-nyn50tvz.js` → `200 OK`

**NOT**:
❌ `Failed to fetch dynamically imported module`

### 3. Test Navigation
Navigate through the site:
- Home page
- My Story
- Case Studies
- Contact
- Resume

All routes should load without errors.

### 4. Clear Cache Test
Test in incognito/private mode to ensure no cache issues:
```
Chrome:   Ctrl+Shift+N (Windows) / Cmd+Shift+N (Mac)
Firefox:  Ctrl+Shift+P (Windows) / Cmd+Shift+P (Mac)
Safari:   Cmd+Shift+N (Mac)
```

## Troubleshooting

### Issue: Chunks fail to load with 404
**Error**: `Failed to fetch dynamically imported module: /Portfolio/client/chunk-xxx.js`

**Cause**: Incorrect `publicPath` in build configuration

**Solution**:
1. Verify `scripts/build.ts` has:
   ```typescript
   const normalized = ensureTrailingSlash(`${pathname}/client`);
   ```
   NOT:
   ```typescript
   const normalized = ensureTrailingSlash(`${pathname}/docs/client`); // ❌ WRONG
   ```
2. Rebuild: `bun run build`
3. Commit and push changes

### Issue: Old files are cached
**Symptom**: Changes don't appear after deployment

**Solution**:
1. Hard refresh: `Ctrl+Shift+R` (Windows) / `Cmd+Shift+R` (Mac)
2. Clear browser cache
3. Wait 5-10 minutes for CDN to invalidate
4. Test in incognito mode

### Issue: GitHub Pages serves from wrong folder
**Symptom**: 404 on homepage

**Solution**:
1. Check GitHub repo **Settings** → **Pages**
2. Ensure **Folder** is set to `/docs` (not `/(root)`)
3. Save and wait for redeployment

### Issue: publicPath is wrong but I already deployed
**Solution**:
1. Fix `scripts/build.ts` (see above)
2. Run: `bun run build`
3. Verify chunk imports: `head -1 docs/client/main.js`
4. Commit and push:
   ```bash
   git add docs/ scripts/build.ts
   git commit -m "Fix publicPath for correct chunk loading"
   git push origin main
   ```
5. Wait 2-3 minutes for deployment
6. Clear cache and test

## Build Script Details

### Key Configuration
```typescript
// scripts/build.ts

/**
 * IMPORTANT: GitHub Pages Behavior
 * When GitHub Pages is configured to serve from the `/docs` folder:
 * - Files are stored at: `docs/client/main.js` in the repository
 * - But accessed via: `https://mrsadri.github.io/Portfolio/client/main.js`
 * - GitHub Pages STRIPS the `/docs` prefix from URLs
 * 
 * Therefore, publicPath should be `/Portfolio/client/`, NOT `/Portfolio/docs/client/`
 */
const resolvePublicPath = () => {
  const homepage = packageMeta.homepage?.trim();
  if (homepage) {
    const homepageUrl = new URL(homepage);
    const pathname = homepageUrl.pathname.replace(/\/$/, "");
    if (pathname && pathname !== "/") {
      // For GitHub Pages: files in docs/client/ are served at /Portfolio/client/
      const normalized = ensureTrailingSlash(`${pathname}/client`);
      return normalized;
    }
  }
  return "/client/";
};
```

### Override PublicPath (if needed)
Set environment variable before build:
```bash
ASSET_PUBLIC_PATH=/custom/path/ bun run build
```

## Local Development vs Production

### Local Development (`bun run dev`)
- Serves from `dist/` folder
- No `/docs` prefix
- Hot reload enabled
- Runs on `http://localhost:3000`

### Production Build (`bun run build`)
- Builds to `dist/` temporarily
- Copies to `docs/` for GitHub Pages
- No hot reload
- Optimized and minified

### Testing Production Build Locally
```bash
# Build production files
bun run build

# Serve production files locally
bun run serve
```

Visit: `http://localhost:3000` (or the port shown)

The bootstrap script in `index.html` will try:
1. `/Portfolio/main.js` (GitHub Pages)
2. `/Portfolio/client/main.js` (GitHub Pages fallback)
3. `/main.js` (Local dev)
4. `/client/main.js` (Local dev fallback)

## Files Modified in Refactor

### 1. `scripts/build.ts`
- Added comprehensive documentation for GitHub Pages behavior
- Removed `docs/dist/` copy (simplified)
- Removed root-level `/client` copy (avoided confusion)
- Enhanced console output for deployment verification
- Bumped version to 2.2.0

### 2. `public/index.html`
- Simplified bootstrap script
- Removed incorrect path candidates (`/docs/client/`, `/docs/dist/`)
- Added documentation explaining path resolution
- Added better error messages

### 3. Documentation
- Created `DEPLOYMENT.md` (this file)
- Updated `chunk-loading-issue-analysis.md` with resolution

## Support

For issues or questions:
1. Check `chunk-loading-issue-analysis.md` for root cause analysis
2. Review this deployment guide
3. Verify GitHub Pages configuration
4. Check browser console for specific errors
5. Test in incognito mode to rule out cache issues

---

**Last Updated**: November 17, 2025  
**Build Version**: 2.2.0

