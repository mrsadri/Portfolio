# GitHub Pages Workflow Conflict - Root Cause & Solution

## Problem

When pushing to GitHub, **two workflows run simultaneously**:
1. **"Deploy to GitHub Pages"** (our custom workflow) ✅ Works correctly
2. **"pages build and deployment"** (GitHub's automatic Jekyll build) ❌ Overwrites our deployment

The second workflow runs **after** our deployment completes and overwrites the files, causing the blank page issue.

## Root Cause

GitHub Pages is configured to use **both** deployment methods:
- GitHub Actions (our custom workflow)
- Automatic Jekyll build (GitHub's default)

When both are enabled, they conflict and the Jekyll build overwrites our deployment.

## Solution

### Step 1: Configure GitHub Pages to Use ONLY GitHub Actions

1. Go to your repository: `https://github.com/mrsadri/Portfolio`
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
4. This will disable the automatic Jekyll build

### Step 2: Verify Configuration

After changing the setting:
- The "pages build and deployment" workflow should **stop running**
- Only "Deploy to GitHub Pages" should run
- Your JavaScript bundles will be served correctly

### Step 3: Test Deployment

1. Make a small change and push to `main`
2. Check GitHub Actions - you should see **only one** workflow running
3. Verify the website loads correctly after deployment

## Current Workflow Configuration

Our workflow (`.github/workflows/deploy.yml`) is already configured correctly:
- ✅ Uses `concurrency: group: "pages"` to prevent conflicts
- ✅ Sets `cancel-in-progress: true` to cancel conflicting deployments
- ✅ Verifies all required files exist before deployment
- ✅ Includes `.nojekyll` to disable Jekyll processing

## Why This Happens

GitHub Pages has two deployment methods:
1. **"Deploy from a branch"** - Uses Jekyll to build from `docs/` or root
2. **"GitHub Actions"** - Uses custom workflows (what we want)

When both are enabled, GitHub tries to use both, causing conflicts.

## Verification

After fixing the GitHub Pages settings, verify:
- ✅ Only one workflow runs per push
- ✅ `main.js` is accessible at `/Portfolio/main.js`
- ✅ Website loads without blank page
- ✅ No 404 errors in browser console

## Additional Notes

- The `.nojekyll` file is already in `docs/` to prevent Jekyll processing
- Our workflow doesn't rebuild (avoids hash mismatches)
- All files are committed to git before deployment

