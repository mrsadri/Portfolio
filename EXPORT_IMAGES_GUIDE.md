# Guide to Export Images from Figma

This guide provides step-by-step instructions for exporting all required images from Figma for the Divar case study page.

## Quick Export Method

1. Open the Figma file: https://www.figma.com/design/fNXbWXZ8lILoi82AMPhPG3/Portfolio-Masih---2026?node-id=1-771
2. For each image below, use Figma's export feature:
   - Select the node
   - Right-click → Export → PNG
   - Set scale to 2x
   - Export to `/images` directory

## Required Images

### 1. Research Insights Flow Diagram
- **Figma Node ID**: `45:121`
- **Filename**: `divar-research-insights.png`
- **Dimensions**: 760x153.63px (export at 2x = 1520x307px)
- **Description**: Flow diagram showing User Quote → Assumption → Validating by Data
- **Status**: ✅ Real image (not placeholder)

### 2. Interview Session Screenshots
- **Figma Node IDs**: 
  - `45:108` (image 10) - 347x282px
  - `45:109` (image 11) - 189.29x282px
- **Filenames**: 
  - `divar-interview-session-1.png` (694x564px at 2x)
  - `divar-interview-session-2.png` (378x564px at 2x)
- **Description**: Google Meet screenshots showing interview sessions
- **Status**: ✅ Real images (not placeholders)

### 3. WhatsApp Profile Comparison Chart
- **Figma Node ID**: `16:92`
- **Filename**: `divar-whatsapp-profile-chart.png`
- **Dimensions**: 760x256px (export at 2x = 1520x512px)
- **Description**: Horizontal stacked bar chart comparing Random Sample vs Victims of harassment
- **Status**: ✅ Real image (not placeholder)

### 4. Cross-Category Comparison Chart
- **Figma Node ID**: `56:97`
- **Filename**: `divar-cross-category-chart.png`
- **Dimensions**: 760x256px (export at 2x = 1520x512px)
- **Description**: Horizontal stacked bar chart showing proportion of hidden/shown phone numbers per category
- **Status**: ✅ Real image (not placeholder)

### 5. SQL Query Screenshot 1
- **Figma Node ID**: `51:92`
- **Filename**: `divar-sql-query-1.png`
- **Dimensions**: 408x246px (export at 2x = 816x492px)
- **Description**: SQL query for cross-category comparison analysis
- **Status**: ✅ Real image (not placeholder)

### 6. Experience-Based Behavior Chart
- **Figma Node ID**: `56:95`
- **Filename**: `divar-experience-behavior-chart.png`
- **Dimensions**: 760x256px (export at 2x = 1520x512px)
- **Description**: Line chart showing % ads with hidden phone number by posting sequence
- **Status**: ✅ Real image (not placeholder)

### 7. SQL Query Screenshot 2
- **Figma Node ID**: `56:112`
- **Filename**: `divar-sql-query-2.png`
- **Dimensions**: 408x589px (export at 2x = 816x1178px)
- **Description**: SQL query with CTE for experience-based behavior analysis
- **Status**: ✅ Real image (not placeholder)

### 8. Problem Storyboard (Placeholder)
- **Figma Node ID**: `7:78`
- **Filename**: `divar-problem-storyboard.png` (optional - currently placeholder)
- **Dimensions**: 760x256px
- **Description**: Placeholder text "A story board to show how this problem happened. captioned."
- **Status**: ⚠️ Placeholder - can skip or create actual storyboard

### 9. First Attempt Storyboard (Placeholder)
- **Figma Node ID**: `34:95`
- **Filename**: `divar-first-attempt-storyboard.png` (optional - currently placeholder)
- **Dimensions**: 760x256px
- **Description**: Placeholder text describing user flow
- **Status**: ⚠️ Placeholder - can skip or create actual storyboard

### 10. Stakeholder Interview (Placeholder)
- **Figma Node ID**: `34:108`
- **Filename**: `divar-stakeholder-interview.png` (optional - currently placeholder)
- **Dimensions**: 760x256px
- **Description**: Placeholder text "Image of me at desk talking with people"
- **Status**: ⚠️ Placeholder - can skip or use actual interview photo

### 11. UI Phase 1 (Placeholder)
- **Figma Node ID**: `34:85`
- **Filename**: `divar-ui-phase-1.png` (optional - currently placeholder)
- **Dimensions**: 760x256px
- **Description**: Placeholder text "new ui of this part"
- **Status**: ⚠️ Placeholder - can skip or create actual UI screenshot

### 12. UI Phase 2 (Placeholder)
- **Figma Node ID**: `34:90`
- **Filename**: `divar-ui-phase-2.png` (optional - currently placeholder)
- **Dimensions**: 760x256px
- **Description**: Placeholder text "new ui of this part"
- **Status**: ⚠️ Placeholder - can skip or create actual UI screenshot

## Export Steps

1. **Open Figma File**: Navigate to the design file
2. **Select Node**: Use the node ID to find and select the element
3. **Export Settings**:
   - Format: PNG
   - Scale: 2x (for retina displays)
   - Export to: `/Users/masih/Downloads/Cursors/Portfolio/images/`
4. **Rename**: Use the suggested filename from the list above
5. **Update Imports**: Once exported, uncomment the import statements in `content.ts`

## Priority

**High Priority** (Real images needed):
- Research insights flow diagram
- WhatsApp profile chart
- Cross-category chart
- Experience behavior chart
- SQL query screenshots

**Low Priority** (Placeholders - can be skipped):
- Storyboards (can use placeholders or create later)
- Interview photos (can use placeholders or add real photos later)
- UI phase images (can use placeholders or add real screenshots later)

## After Exporting

1. Uncomment the import statements in `src/features/case-studies/data/content.ts`
2. Update the `createImageResource` calls to use the new image assets
3. Remove TODO comments
4. Test the page to ensure all images load correctly

