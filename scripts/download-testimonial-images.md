# Download Testimonial Images Script

This guide helps you download profile images from LinkedIn recommendations.

## Manual Method

1. Open your browser and navigate to: https://www.linkedin.com/in/msadri/details/recommendations/
2. For each person:
   - Right-click on their profile picture
   - Select "Inspect" or "Inspect Element"
   - Find the `<img>` tag with the profile picture
   - Right-click on the image URL in the inspector
   - Select "Open in new tab"
   - Right-click the image and "Save image as..."
   - Save to `images/testimonials/` with the correct filename

## Using Browser Console (Faster Method)

1. Open LinkedIn recommendations page
2. Open browser console (F12 or Cmd+Option+I)
3. Run this script to extract all profile image URLs:

```javascript
// Extract profile image URLs from LinkedIn recommendations page
const images = [];
document.querySelectorAll('img[alt*="profile"], img[alt*="Profile"]').forEach(img => {
  const src = img.src;
  if (src && src.includes('profile') && !src.includes('logo')) {
    images.push({
      name: img.alt || 'Unknown',
      url: src
    });
  }
});
console.table(images);
// Copy the URLs and download manually
```

## Alternative: Use LinkedIn Profile URLs

If you have LinkedIn profile URLs, you can use a tool like:
- LinkedIn Profile Picture Downloader extensions
- Or manually visit each profile and download the image

## After Downloading

1. Rename files according to the convention in `images/testimonials/README.md`
2. Update `src/features/home/data/content.ts` to import and use the images
3. Uncomment the image lines in the testimonial data

