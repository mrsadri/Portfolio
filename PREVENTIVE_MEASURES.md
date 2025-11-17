# Preventive Measures for GitHub Pages 404 Issues

## Overview
This document outlines measures to prevent and quickly diagnose GitHub Pages 404 errors in the future.

## Automated Checks

### 1. Pre-Deployment Validation Script
A validation script should check:
- ✅ All SPA fallback files exist for each route
- ✅ `.nojekyll` file exists in `docs/`
- ✅ Asset paths in built files match expected pattern
- ✅ `404.html` exists and is properly formatted
- ✅ All required directories exist

### 2. GitHub Actions Workflow Verification
The `.github/workflows/pages.yml` workflow:
- ✅ Builds the project
- ✅ Uploads `docs/` folder as artifact
- ✅ Deploys to GitHub Pages
- ✅ Runs on every push to `main`

### 3. Build Script Enhancements
The build script (`scripts/build.ts`) should:
- ✅ Generate all SPA fallback files automatically
- ✅ Create `.nojekyll` file
- ✅ Verify asset paths match GitHub Pages structure
- ✅ Output deployment checklist

## Manual Verification Checklist

Before considering deployment complete, verify:

- [ ] GitHub Pages settings configured:
  - Source: "GitHub Actions" OR "Deploy from branch: main, folder: /docs"
- [ ] Build completed without errors
- [ ] All files committed to repository
- [ ] GitHub Actions workflow completed successfully (if using Actions)
- [ ] Test homepage: `https://mrsadri.github.io/Portfolio/`
- [ ] Test direct route: `https://mrsadri.github.io/Portfolio/my-story`
- [ ] Test refresh on route (Ctrl+Shift+R)
- [ ] Test 404 page: `https://mrsadri.github.io/Portfolio/nonexistent`

## Common Issues and Solutions

### Issue: GitHub Shows Default 404
**Cause**: GitHub Pages not configured or serving from wrong folder
**Solution**: 
1. Go to Settings → Pages
2. Set source to "GitHub Actions" or "Deploy from branch: main, folder: /docs"
3. Wait 1-2 minutes for deployment

### Issue: Assets Fail to Load
**Cause**: Incorrect `publicPath` in build configuration
**Solution**: 
- Verify `publicPath` is `/Portfolio/client/` (not `/Portfolio/docs/client/`)
- GitHub Pages strips `/docs` prefix from URLs

### Issue: Routes Work on Navigation but Fail on Refresh
**Cause**: Missing SPA fallback files
**Solution**: 
- Rebuild: `bun run build`
- Verify `docs/{route}/index.html` files exist
- Commit and push

### Issue: Custom 404 Not Showing
**Cause**: GitHub Pages not configured or `.nojekyll` missing
**Solution**: 
- Ensure `docs/.nojekyll` exists and is committed
- Verify GitHub Pages is configured correctly

## Monitoring and Alerts

### Recommended Monitoring:
1. **GitHub Actions Status**: Check Actions tab after each push
2. **Deployment Status**: Monitor GitHub Pages deployment in Settings → Pages
3. **Browser Testing**: Test critical routes after each deployment
4. **404 Monitoring**: Use analytics to track 404 errors

### Automated Testing:
Consider adding:
- End-to-end tests for critical routes
- Smoke tests after deployment
- Link checker to verify all internal links work

## Documentation Updates

Keep these documents updated:
- `DEPLOYMENT.md` - Deployment procedures
- `GITHUB_PAGES_SETUP.md` - Setup instructions
- `README.md` - Quick start guide
- This file - Preventive measures

## Quick Diagnosis Commands

```bash
# Check if build is fresh
bun run build

# Verify SPA fallback files exist
find docs -name "index.html" -type f

# Check asset paths
head -1 docs/client/main.js | grep -o '/Portfolio/client/[^"]*'

# Verify .nojekyll exists
test -f docs/.nojekyll && echo "✓ .nojekyll exists" || echo "✗ Missing .nojekyll"

# Check git status
git status docs/
```

## Future Improvements

1. **Automated Testing**: Add E2E tests that verify routes work
2. **Deployment Validation**: Script that checks deployment health
3. **Monitoring Integration**: Set up alerts for 404 spikes
4. **Documentation Site**: Host deployment docs separately for redundancy

