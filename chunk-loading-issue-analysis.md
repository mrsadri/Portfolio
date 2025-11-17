# Chunk Loading Issue - Root Cause Analysis

## Problem Statement
Production site at `https://mrsadri.github.io/Portfolio/` fails with:
```
Failed to fetch dynamically imported module: https://mrsadri.github.io/Portfolio/client/chunk-1q00nmqm.js
```

The chunks are actually located at: `https://mrsadri.github.io/Portfolio/docs/client/chunk-1q00nmqm.js`

---

## 6 Root Cause Assumptions

### 1. **Build Not Executed After Fix**
**Assumption**: The `docs/` folder still contains chunks built with the old `publicPath` setting (`/Portfolio/client/`).

**Why**: The build script change was just made but `bun run build` hasn't been executed yet. The deployed files in `docs/client/` still have hardcoded imports pointing to `/Portfolio/client/`.

**Verification**: Check if the imports in `docs/client/main.js` still reference `/Portfolio/client/` instead of `/Portfolio/docs/client/`.

**Solution**: Run `bun run build` to regenerate all chunks with the correct `publicPath`.

---

### 2. **GitHub Pages Serves from Root, Not docs/**
**Assumption**: GitHub Pages might be configured to serve from the repository root instead of the `/docs` folder.

**Why**: If GitHub Pages is serving from root, the chunks would be at `https://mrsadri.github.io/Portfolio/client/` (which exists in the root as a build artifact), but `index.html` is in `docs/` causing a path mismatch.

**Verification**: Check GitHub repository Settings → Pages → Source to confirm it's set to "Deploy from a branch: main/docs".

**Solution**: Ensure GitHub Pages is configured to serve from the `/docs` folder, or restructure the build output.

---

### 3. **Browser/CDN Cache Contains Stale Files**
**Assumption**: Browser cache or GitHub's CDN is serving an old version of `main.js` or `index.html` with outdated chunk references.

**Why**: Even after rebuilding and redeploying, browsers and CDNs cache static assets aggressively. The old `main.js` might still be cached with references to `/Portfolio/client/`.

**Verification**: Open DevTools → Network tab → Disable cache → Hard refresh. Check if the issue persists.

**Solution**: 
- Clear browser cache
- Add cache-busting to filenames (Bun already does this with content hashes)
- Wait for GitHub Pages CDN to invalidate (~10 minutes)

---

### 4. **Dual Output Directory Confusion**
**Assumption**: The build creates files in both `/client` (root) and `/docs/client`, but imports are inconsistent.

**Why**: Looking at `build.ts`, it copies build artifacts to multiple locations:
- `docs/client/`
- `docs/dist/`
- `client/` (root level, which is gitignored)

The bootstrap script in `index.html` tries multiple paths, but Bun's `publicPath` is hardcoded in the chunks themselves.

**Verification**: Check if `/client` directory exists in the root and compare with `/docs/client`.

**Solution**: Remove the copy operation to root-level `/client` directory, or ensure `publicPath` matches the actual deployment location.

---

### 5. **Mismatch Between index.html Bootstrap and Chunk Imports**
**Assumption**: The `index.html` bootstrap script successfully loads `main.js` from one location, but `main.js` tries to import chunks from a different location.

**Why**: The fallback mechanism in `index.html` (lines 209-221) tries multiple paths for `main.js`:
```javascript
const candidates = [
  "/Portfolio/docs/client/main.js",
  "/Portfolio/client/main.js",
  "/Portfolio/main.js",
  // ...
];
```

But once `main.js` loads, the chunk imports are hardcoded at build time via `publicPath`. If `main.js` loads from `/Portfolio/main.js` but chunks are hardcoded to `/Portfolio/client/`, it fails.

**Verification**: Check which `main.js` path successfully loads, then verify chunks import from the same base path.

**Solution**: Align the `publicPath` in `build.ts` with where `main.js` actually loads from in production.

---

### 6. **publicPath Configured for Docs Subdirectory But Files Served Differently**
**Assumption**: The updated `publicPath` (`/Portfolio/docs/client/`) might be incorrect because GitHub Pages serves files differently than expected.

**Why**: GitHub Pages, when configured to serve from `/docs`, makes `docs/` the root. So a file at `docs/client/main.js` becomes accessible at `https://mrsadri.github.io/Portfolio/client/main.js`, NOT at `https://mrsadri.github.io/Portfolio/docs/client/main.js`.

**Verification**: Try accessing both URLs:
- `https://mrsadri.github.io/Portfolio/client/chunk-1q00nmqm.js`
- `https://mrsadri.github.io/Portfolio/docs/client/chunk-1q00nmqm.js`

**Solution**: If GitHub Pages strips the `/docs` prefix, revert `publicPath` to `/Portfolio/client/` instead of `/Portfolio/docs/client/`.

---

## Recommended Investigation Steps

1. **Verify GitHub Pages Configuration**
   - Go to repository Settings → Pages
   - Confirm source is set to: Branch `main`, Folder `/docs`

2. **Test File Accessibility**
   - Visit: `https://mrsadri.github.io/Portfolio/docs/client/chunk-1q00nmqm.js`
   - Visit: `https://mrsadri.github.io/Portfolio/client/chunk-1q00nmqm.js`
   - Determine which URL is accessible

3. **Inspect Current Build Output**
   - Check imports in `docs/client/main.js` (line 1)
   - Verify the path pattern used for chunk imports

4. **Rebuild with Correct Path**
   - Based on findings, adjust `publicPath` in `build.ts`
   - Run `bun run build`
   - Commit and push changes
   - Wait 2-3 minutes for GitHub Pages to deploy

5. **Clear Cache and Test**
   - Hard refresh browser (Ctrl+Shift+R / Cmd+Shift+R)
   - Test in incognito/private mode
   - Test on mobile device (different cache)

---

## Most Likely Root Cause

**Assumption #6** is most likely correct. GitHub Pages, when serving from `/docs` folder, treats `docs/` as the web root. Therefore:

- File location: `docs/client/main.js`
- Accessible at: `https://mrsadri.github.io/Portfolio/client/main.js`
- NOT at: `https://mrsadri.github.io/Portfolio/docs/client/main.js`

The fix should be to **revert** the `publicPath` back to `/Portfolio/client/` and rebuild.

---

## Resolution Applied

✅ **Fixed**: Reverted `publicPath` in `build.ts` from `/Portfolio/docs/client/` back to `/Portfolio/client/`

✅ **Rebuilt**: Executed `bun run build` to regenerate all chunks with correct import paths

✅ **Verified**: Confirmed that `docs/client/main.js` now imports chunks using `/Portfolio/client/` path:
```javascript
import{c as H6}from"/Portfolio/client/chunk-9rq7nd8m.js";
import{e as C6}from"/Portfolio/client/chunk-7sa8qg0s.js";
```

### Next Steps for User:
1. Commit the changes to `docs/` folder
2. Push to GitHub
3. Wait 1-2 minutes for GitHub Pages to rebuild
4. Clear browser cache or test in incognito mode
5. Verify the site loads without chunk import errors

