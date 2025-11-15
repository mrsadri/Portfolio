# Production vs Local Differences Analysis

**Date:** January 2025  
**Production URL:** https://mrsadri.github.io/Portfolio/  
**Local URL:** http://localhost:3000/

## Summary

Production is missing 2 case studies (Case 03 and Case 04) that are present in the local version. The production build appears to be outdated and missing recent changes.

---

## Detailed Differences

### 1. Homepage - Case Studies Section

**Local (4 case studies):**
- ✅ Case 01: Divar Secure Call - "The Story of Reducing Harassment by 60%"
- ✅ Case 02: Setare Aval Engagement - "Turning One-Time Visitors into Lifelong Customers"
- ✅ Case 03: SetareYek Bill Payment - "From 4% to 47%: Turning a Failing Feature Into Core Value"
- ✅ Case 04: BimeBazar - "How Physical Receipts Increased Retention by 6%" (Locked/In Progress)

**Production (2 case studies):**
- ✅ Case 01: Divar Secure Call - "The Story of Reducing Harassment by 60%"
- ✅ Case 02: Setare Aval Engagement - "Turning One-Time Visitors into Lifelong Customers"
- ❌ Case 03: Missing
- ❌ Case 04: Missing

### 2. URL Path Differences

**Local:**
- Routes use clean paths: `/case-studies/divar-secure-call`
- Base path: `/`

**Production:**
- Routes include `/Portfolio` prefix: `/Portfolio/case-studies/divar-secure-call`
- Base path: `/Portfolio/`

This is expected behavior for GitHub Pages deployment.

### 3. Build Script Analysis

The build script (`scripts/build.ts`) has a hardcoded list of SPA fallback routes:

```typescript
const spaFallbackRoutes = [
  "contact",
  "my-story",
  "resume",
  "case-studies",
  "case-studies/divar-secure-call",
  "case-studies/setare-aval-engagement",
];
```

**Missing routes:**
- `case-studies/setare-yek-bill-payment` (Case 03)

**Note:** Case 04 (BimeBazar) is locked and doesn't have a dedicated route, so it doesn't need to be in the fallback list.

### 4. Content Data

The `src/features/home/data/content.ts` file correctly defines all 4 case studies:
- All 4 entries are present in the `caseStudies` array
- Case 03 and Case 04 are properly configured

---

## Root Cause Analysis - 5 Assumptions

### Assumption 1: Outdated Production Build
**Likelihood: HIGH**  
The production build (`docs/` folder) was created before Case 03 and Case 04 were added to the codebase. The build artifacts in production don't include the latest JavaScript bundles that contain the new case study data.

**Evidence:**
- Case studies are defined in source code correctly
- Production shows older version of the homepage
- Build script needs to be run to regenerate `docs/` folder

### Assumption 2: Missing Build Script Route Configuration
**Likelihood: MEDIUM**  
The build script's `spaFallbackRoutes` array is missing the `case-studies/setare-yek-bill-payment` route. While this wouldn't prevent the case study from showing on the homepage, it could cause issues when navigating directly to the case study page.

**Evidence:**
- Build script has hardcoded route list
- Case 03 route is not in the list
- This could cause 404 errors when accessing the case study directly

### Assumption 3: JavaScript Bundle Not Updated
**Likelihood: HIGH**  
The production JavaScript bundles (`docs/dist/` or `docs/client/`) contain old code that doesn't include Case 03 and Case 04. When the React app loads, it's using cached or outdated JavaScript that only knows about 2 case studies.

**Evidence:**
- Case studies are rendered client-side via React
- Production bundles are likely from an older build
- Browser may be caching old JavaScript files

### Assumption 4: GitHub Pages Cache Issues
**Likelihood: LOW**  
GitHub Pages might be serving cached versions of the files, or there might be a delay in deployment propagation.

**Evidence:**
- Less likely given the significant difference (2 vs 4 case studies)
- Would typically resolve itself after deployment

### Assumption 5: Build Process Not Executed After Code Changes
**Likelihood: HIGH**  
The `bun run build` command was not executed after adding Case 03 and Case 04, so the `docs/` folder (which is what GitHub Pages serves) was never updated with the new content.

**Evidence:**
- Source code has all 4 case studies
- Production `docs/` folder likely contains old build artifacts
- Build script needs to be run to sync source code to production output

---

## Recommended Solutions

### Primary Solution: Rebuild and Deploy
1. Run `bun run build` to regenerate the `docs/` folder with latest code
2. Update build script to include missing route: `case-studies/setare-yek-bill-payment`
3. Commit and push the updated `docs/` folder
4. Verify deployment on GitHub Pages

### Secondary Solution: Fix Build Script
Update `scripts/build.ts` to dynamically generate routes from case study data instead of hardcoding them, preventing future mismatches.

---

## Files That Need Updates

1. **scripts/build.ts** - Add missing route to `spaFallbackRoutes`
2. **docs/** folder - Regenerate via `bun run build`
3. **Git commit** - Ensure `docs/` folder is committed with latest build

---

## Verification Checklist

After fixes:
- [ ] Homepage shows 4 case studies in production
- [ ] Case 03 (SetareYek) is accessible via direct URL
- [ ] Case 04 (BimeBazar) appears on homepage (locked state)
- [ ] All case study links work correctly
- [ ] No console errors in production
- [ ] Build script includes all necessary routes

