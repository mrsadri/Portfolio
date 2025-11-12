#!/usr/bin/env bun
/**
 * Helper script to set up testimonial images
 * 
 * This script helps you organize testimonial profile images.
 * 
 * Usage:
 * 1. Download profile images from LinkedIn to images/testimonials/
 * 2. Name them according to the mapping below
 * 3. Run this script to verify all images are in place
 * 
 * Image naming mapping:
 * - mahdi-ahmadizadeh.jpg -> Mahdi Ahmadizadeh
 * - nahid-k.jpg -> Nahid K.
 * - shadi-zarei.jpg -> Shadi Zarei
 * - sadeq-b.jpg -> Sadeq .B
 * - ali-azade.jpg -> Ali Azade
 * - saeed-abolghasemi.jpg -> Saeed Abolghasemi
 * - hossein-mahmoudvand.jpg -> Hossein Mahmoudvand
 * - shayan-mehranpour.jpg -> Shayan Mehranpour
 */

import { existsSync, readdirSync } from "fs";
import { join } from "path";

const testimonialsDir = join(import.meta.dir, "..", "images", "testimonials");
const expectedImages = [
  "mahdi-ahmadizadeh",
  "nahid-k",
  "shadi-zarei",
  "sadeq-b",
  "ali-azade",
  "saeed-abolghasemi",
  "hossein-mahmoudvand",
  "shayan-mehranpour",
];

const imageExtensions = [".jpg", ".jpeg", ".png", ".webp"];

function checkTestimonialImages() {
  console.log("📸 Checking testimonial images...\n");

  if (!existsSync(testimonialsDir)) {
    console.log(`❌ Directory not found: ${testimonialsDir}`);
    console.log("   Creating directory...");
    return;
  }

  const files = readdirSync(testimonialsDir);
  const imageFiles = files.filter((file) =>
    imageExtensions.some((ext) => file.toLowerCase().endsWith(ext))
  );

  console.log(`Found ${imageFiles.length} image(s) in testimonials directory\n`);

  const foundImages: string[] = [];
  const missingImages: string[] = [];

  for (const expected of expectedImages) {
    const found = imageFiles.find((file) =>
      file.toLowerCase().startsWith(expected.toLowerCase())
    );

    if (found) {
      foundImages.push(expected);
      console.log(`✅ ${expected.padEnd(25)} -> ${found}`);
    } else {
      missingImages.push(expected);
      console.log(`❌ ${expected.padEnd(25)} -> MISSING`);
    }
  }

  console.log("\n" + "=".repeat(60));
  console.log(`Summary: ${foundImages.length}/${expectedImages.length} images found\n`);

  if (missingImages.length > 0) {
    console.log("Missing images:");
    missingImages.forEach((name) => {
      console.log(`  - ${name}.jpg (or .png, .webp)`);
    });
    console.log("\n💡 Tip: Download images from LinkedIn and save them with the names above.");
  } else {
    console.log("🎉 All testimonial images are in place!");
    console.log("\nNext steps:");
    console.log("1. Update src/features/home/data/content.ts");
    console.log("2. Uncomment the image import lines");
    console.log("3. Import the images at the top of the file");
  }
}

checkTestimonialImages();

