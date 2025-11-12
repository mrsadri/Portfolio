# Testimonial Profile Images

This directory contains profile images for the testimonials section.

## How to Add Profile Images

1. **Download images from LinkedIn:**
   - Go to https://www.linkedin.com/in/msadri/details/recommendations/
   - Right-click on each person's profile picture
   - Select "Save image as..." or "Copy image"
   - Save with the naming convention: `firstname-lastname.jpg` (or `.png`, `.webp`)

2. **Naming Convention:**
   - Use lowercase, hyphenated names
   - Examples:
     - `mahdi-ahmadizadeh.jpg`
     - `nahid-k.jpg`
     - `shadi-zarei.jpg`
     - `sadeq-b.jpg`
     - `ali-azade.jpg`
     - `saeed-abolghasemi.jpg`
     - `hossein-mahmoudvand.jpg`
     - `shayan-mehranpour.jpg`

3. **Image Requirements:**
   - Format: JPG, PNG, or WebP
   - Recommended size: 200x200px to 400x400px (square)
   - File size: Keep under 100KB for optimal performance

4. **After adding images:**
   - Update `src/features/home/data/content.ts`
   - Uncomment the image import and `createImageResource` lines for each testimonial
   - Import the image at the top of the file
   - Example:
     ```typescript
     import mahdiAhmadizadehImage from "../../../../images/testimonials/mahdi-ahmadizadeh.jpg";
     
     // Then in the testimonial:
     image: createImageResource(import.meta.url, mahdiAhmadizadehImage, "Mahdi Ahmadizadeh"),
     ```

## Current Testimonials

1. **Mahdi Ahmadizadeh** - Design System Manager at Snapp! Market (Mentee)
2. **Nahid K.** - Product Manager (Colleague)
3. **Shadi Zarei** - Researcher & UX/UI Designer, PhD Candidate (Classmate)
4. **Sadeq .B** - Senior iOS Engineer (Classmate)
5. **Ali Azade** - Software Engineer at UserTesting (Former Teacher)
6. **Saeed Abolghasemi** - Principal Product Designer (Direct Report)
7. **Hossein Mahmoudvand** - Product Design Lead at SnappPay (Former Manager)
8. **Shayan Mehranpour** - Senior Software Engineer at Flix (Team Member)

