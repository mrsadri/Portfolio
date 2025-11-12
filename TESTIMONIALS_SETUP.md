# Testimonials Section Setup Guide

## ✅ What's Been Done

1. **Type Definition Updated**
   - Added `relationship` field to `Testimonial` type in `src/features/home/types.ts`

2. **Testimonial Data Updated**
   - Added relationship information for all 8 testimonials:
     - Mahdi Ahmadizadeh - Mentee
     - Nahid K. - Colleague
     - Shadi Zarei - Classmate
     - Sadeq .B - Classmate
     - Ali Azade - Former Teacher
     - Saeed Abolghasemi - Direct Report
     - Hossein Mahmoudvand - Former Manager
     - Shayan Mehranpour - Team Member

3. **Component Updated**
   - `TestimonialsSection` now displays the relationship below the author's position/company
   - Relationship is styled with brand color for visibility

4. **Directory Structure**
   - Created `images/testimonials/` directory for profile images
   - Added README with instructions

5. **Helper Scripts**
   - Created `scripts/setup-testimonial-images.ts` to verify images are in place
   - Created `scripts/download-testimonial-images.md` with download instructions

## 📋 Next Steps: Adding Profile Images

### Step 1: Download Images from LinkedIn

1. Go to: https://www.linkedin.com/in/msadri/details/recommendations/
2. For each person, download their profile picture:
   - Right-click on profile picture → "Save image as..."
   - Or use browser inspector to get the image URL

### Step 2: Save Images with Correct Names

Save images to `images/testimonials/` with these exact names:

- `mahdi-ahmadizadeh.jpg` (or .png/.webp)
- `nahid-k.jpg`
- `shadi-zarei.jpg`
- `sadeq-b.jpg`
- `ali-azade.jpg`
- `saeed-abolghasemi.jpg`
- `hossein-mahmoudvand.jpg`
- `shayan-mehranpour.jpg`

### Step 3: Update content.ts

1. Open `src/features/home/data/content.ts`
2. Add imports at the top (after line 3):
   ```typescript
   import mahdiAhmadizadehImage from "../../../../images/testimonials/mahdi-ahmadizadeh.jpg";
   import nahidKImage from "../../../../images/testimonials/nahid-k.jpg";
   import shadiZareiImage from "../../../../images/testimonials/shadi-zarei.jpg";
   import sadeqBImage from "../../../../images/testimonials/sadeq-b.jpg";
   import aliAzadeImage from "../../../../images/testimonials/ali-azade.jpg";
   import saeedAbolghasemiImage from "../../../../images/testimonials/saeed-abolghasemi.jpg";
   import hosseinMahmoudvandImage from "../../../../images/testimonials/hossein-mahmoudvand.jpg";
   import shayanMehranpourImage from "../../../../images/testimonials/shayan-mehranpour.jpg";
   ```

3. Uncomment the `image` lines in each testimonial object:
   ```typescript
   image: createImageResource(import.meta.url, mahdiAhmadizadehImage, "Mahdi Ahmadizadeh"),
   ```

### Step 4: Verify Setup

Run the verification script:
```bash
bun run scripts/setup-testimonial-images.ts
```

## 🎨 Current Display

The testimonial section now shows:
- Large quote text with decorative quotation marks
- Author avatar (shows first letter until image is added)
- Author name (bold)
- Position and company
- **Relationship** (newly added, styled in brand color)

## 📝 Notes

- Images are optional - the component will show initials in the avatar until images are added
- Recommended image size: 200x200px to 400x400px (square)
- Keep file sizes under 100KB for optimal performance
- Use WebP format for best compression if possible

