#!/bin/bash
# Quick verification script for deployment

echo "🔍 Verifying Deployment Readiness"
echo "=================================="
echo ""

# Check if critical files exist
echo "📁 Checking critical files..."
if [ -f "docs/main.js" ] && [ -f "docs/main.css" ] && [ -f "docs/client/main.js" ] && [ -f "docs/index.html" ] && [ -f "docs/.nojekyll" ]; then
    echo "✅ All critical files present"
else
    echo "❌ Missing critical files"
    exit 1
fi

# Check file sizes
echo ""
echo "📊 File sizes:"
ls -lh docs/main.js docs/main.css docs/client/main.js docs/index.html | awk '{print "  " $9 ": " $5}'

# Check if files are tracked in git
echo ""
echo "🔍 Checking git tracking..."
if git ls-files docs/main.js docs/main.css docs/client/main.js docs/index.html > /dev/null 2>&1; then
    echo "✅ All files tracked in git"
else
    echo "❌ Some files not tracked"
    exit 1
fi

# Count JS files
JS_COUNT=$(find docs/client -name "*.js" | wc -l | tr -d ' ')
echo ""
echo "📦 JavaScript chunks: $JS_COUNT files in docs/client/"

# Check git status
echo ""
echo "📝 Git status:"
git status --short docs/ 2>&1 | head -5
if [ $? -eq 0 ] && [ -z "$(git status --short docs/ 2>&1)" ]; then
    echo "✅ docs/ folder is clean (all changes committed)"
else
    echo "⚠️  There are uncommitted changes in docs/"
fi

echo ""
echo "=================================="
echo "✅ Local verification complete!"
echo ""
echo "Next steps:"
echo "1. Push changes: git push"
echo "2. Check GitHub Actions: https://github.com/mrsadri/Portfolio/actions"
echo "3. Verify Pages settings: https://github.com/mrsadri/Portfolio/settings/pages"
echo "4. Test production URLs after deployment completes"
echo ""

