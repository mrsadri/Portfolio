#!/usr/bin/env tsx
/**
 * This script helps download country symbols by providing URLs to search
 * Run this and manually collect URLs, or use browser automation
 */

const countries = [
  "Netherlands",
  "Ireland", 
  "Germany",
  "Sweden",
  "Denmark",
  "Finland",
  "Portugal",
  "Spain",
  "Austria",
  "Belgium",
  "Switzerland",
  "Estonia",
  "Czech Republic",
  "Poland",
  "France",
  "Italy",
  "Norway",
  "Luxembourg",
  "Hungary",
  "Greece",
];

// Known URLs from manual collection - we'll populate these
const countryUrls: Record<string, string> = {
  Netherlands: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-C48t229HBFpS5D4YDkfcteT9L8By0V.png",
};

async function downloadImage(url: string, filename: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    await Bun.write(filename, buffer);
    console.log(`✓ Downloaded ${filename}`);
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error);
  }
}

async function main() {
  const outputDir = "./images/countries";
  
  console.log("Downloading country symbols...\n");
  
  for (const country of countries) {
    const url = countryUrls[country];
    if (!url) {
      console.log(`⚠ Skipping ${country} - URL not found. Search: https://www.thiings.co/things?search=${encodeURIComponent(country)}`);
      continue;
    }
    
    const filename = `${outputDir}/${country.toLowerCase().replace(/\s+/g, '-')}.png`;
    await downloadImage(url, filename);
    await new Promise(resolve => setTimeout(resolve, 500)); // Rate limiting
  }
  
  console.log("\nDone!");
}

main().catch(console.error);

