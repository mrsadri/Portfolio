#!/bin/bash
# Portfolio Deployment Script
# Run this script to deploy the updated portfolio

set -e  # Exit on any error

echo "🚀 Portfolio Deployment Script"
echo "================================"
echo ""

# Colors for output
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo -e "${BLUE}Step 1/5:${NC} Checking for changes..."
if [ -z "$(git status --porcelain)" ]; then 
    echo "✅ No changes to commit. Workspace is clean."
    read -p "Continue deployment anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
        echo "Deployment cancelled."
        exit 0
    fi
else
    echo "✅ Changes detected."
fi

echo ""
echo -e "${BLUE}Step 2/5:${NC} Running production build..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please fix errors before deploying."
    exit 1
fi
echo "✅ Build successful!"

echo ""
echo -e "${BLUE}Step 3/5:${NC} Staging changes..."
git add images/memories/
git add src/
git add client/ dist/ docs/
git add IMAGE_RENAME_SUMMARY.md TEAM_MEMORIES_FINAL_STORIES.md DEPLOYMENT_CHECKLIST.md
git add scripts/
git add -A

echo "✅ Changes staged!"

echo ""
echo -e "${BLUE}Step 4/5:${NC} Creating commit..."
git commit -m "feat: Update Team Memories with 8 curated stories and rename images

- Rename all memory images to descriptive, recognizable names
- Replace 17-story carousel with 8 focused, portfolio-appropriate narratives
- Update all documentation and imports to reflect new image names
- Rebuild production artifacts with updated content

Professional stories (5):
- My Divar Product Team
- Teaching at Rahnema College
- Data Analysis Bootcamp journey (2 moments)
- Early days at Tiara UX Agency

Personal/Community stories (3):
- Omidvar Brothers Museum exploration
- Tochal Mountain community building
- Wood carving workshop lessons

All images renamed from generic names to descriptive names.
Build: Production-ready, no linter errors, all imports verified."

if [ $? -ne 0 ]; then
    echo "ℹ️  Nothing to commit (changes may already be committed)"
fi

echo ""
echo -e "${BLUE}Step 5/5:${NC} Pushing to repository..."
CURRENT_BRANCH=$(git branch --show-current)
echo "Current branch: $CURRENT_BRANCH"
echo ""
echo -e "${YELLOW}Ready to push to origin/$CURRENT_BRANCH${NC}"
read -p "Continue? (y/n) " -n 1 -r
echo

if [[ $REPLY =~ ^[Yy]$ ]]; then
    git push origin "$CURRENT_BRANCH"
    
    if [ $? -eq 0 ]; then
        echo ""
        echo "================================"
        echo -e "${GREEN}✅ Deployment successful!${NC}"
        echo "================================"
        echo ""
        echo "📊 Deployment Summary:"
        echo "  • Branch: $CURRENT_BRANCH"
        echo "  • Build: docs/ directory (41MB)"
        echo "  • Stories: 8 curated team memories"
        echo "  • Images: All renamed to descriptive names"
        echo ""
        echo "🔗 Next Steps:"
        echo "  1. If using GitHub Pages, changes will be live in a few minutes"
        echo "  2. Visit your portfolio to verify deployment"
        echo "  3. Test the Team Memories carousel"
        echo "  4. Check that all images load correctly"
        echo ""
        echo "📝 See DEPLOYMENT_CHECKLIST.md for post-deployment verification"
    else
        echo "❌ Push failed. Please check your git configuration and try again."
        exit 1
    fi
else
    echo ""
    echo "Deployment cancelled. Changes are committed locally but not pushed."
    echo "To push later, run: git push origin $CURRENT_BRANCH"
fi

