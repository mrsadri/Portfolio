#!/bin/bash

# Portfolio Project Cleanup Script
# This script removes all unnecessary files from git tracking and cleans the project

set -e

echo "🧹 Starting Portfolio Cleanup..."
echo ""

# Step 1: Remove node_modules from git tracking (THE MAIN ISSUE)
echo "📦 Removing node_modules from git tracking..."
git rm -r --cached node_modules/ 2>/dev/null || echo "  (already removed)"

# Step 2: Remove dist from git tracking
echo "📁 Removing dist from git tracking..."
git rm -r --cached dist/ 2>/dev/null || echo "  (already removed)"

# Step 3: Remove .tmp from git tracking
echo "🗂️  Removing .tmp from git tracking..."
git rm -r --cached .tmp/ 2>/dev/null || echo "  (already removed)"

# Step 4: Remove .docs from git tracking (hidden docs folder)
echo "📄 Removing .docs from git tracking..."
git rm -r --cached .docs/ 2>/dev/null || echo "  (already removed)"

# Step 5: Remove unnecessary markdown files
echo "📝 Removing debug/fix markdown files..."
MARKDOWN_FILES=(
  "BUN_DOWNLOAD_FIX.md"
  "DEBUG_BLANK_PAGE.md"
  "DEEP_REFRESH_404_ANALYSIS.md"
  "DEPLOYMENT.md"
  "DEPLOYMENT_SETUP.md"
  "DEPLOYMENT_SUCCESS_SUMMARY.md"
  "FINAL_VERIFICATION.md"
  "FIX_SUMMARY.md"
  "GITHUB_PAGES_SETUP.md"
  "ISSUE_COMPLETELY_RESOLVED.md"
  "ISSUE_RESOLUTION_SUMMARY.md"
  "ISSUE_RESOLVED.md"
  "JAVASCRIPT_BUNDLE_404_ANALYSIS.md"
  "Main_fix.md"
  "PREVENTIVE_MEASURES.md"
  "PREVENTIVE_REFACTORING.md"
  "PRODUCTION_REFINEMENT.md"
  "TECHNICAL_ISSUES_ANALYSIS.md"
  "URGENT_ACTION_REQUIRED.md"
  "URGENT_FIX.md"
  "WORKFLOW_CONSOLIDATION.md"
  "chunk-loading-issue-analysis.md"
  "spa-routing-issue-analysis.md"
  "CLEANUP_SUMMARY.md"
  "PROJECT_DOCUMENTATION.md"
  "SOLUTION.md"
)

for file in "${MARKDOWN_FILES[@]}"; do
  if [ -f "$file" ]; then
    git rm --cached "$file" 2>/dev/null || true
    rm -f "$file"
    echo "  ✓ Deleted $file"
  fi
done

# Step 6: Remove unnecessary scripts
echo "🔧 Removing unnecessary scripts..."
rm -f scripts/cleanup.ts 2>/dev/null || true
echo "  ✓ Cleaned scripts folder"

# Step 7: Remove .DS_Store from git
echo "🍎 Removing .DS_Store files..."
git rm --cached .DS_Store 2>/dev/null || echo "  (not tracked)"
find . -name ".DS_Store" -delete 2>/dev/null || true

echo ""
echo "✅ Cleanup complete!"
echo ""
echo "Next steps:"
echo "  1. Review the changes with: git status"
echo "  2. Commit: git add -A && git commit -m 'Major cleanup: remove node_modules and debug files from tracking'"
echo "  3. Push: git push --force-with-lease origin main"
echo ""
echo "⚠️  OPTIONAL: To completely reduce git history size, run:"
echo "    git reflog expire --expire=now --all"
echo "    git gc --prune=now --aggressive"
echo ""

