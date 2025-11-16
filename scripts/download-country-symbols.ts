#!/usr/bin/env tsx
/**
 * Script to download country symbols from thiings.co
 * Usage: bun run scripts/download-country-symbols.ts
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

const outputDir = "./images/countries";

async function downloadCountrySymbol(country: string): Promise<void> {
  const searchUrl = `https://www.thiings.co/things?search=${encodeURIComponent(country)}`;
  
  try {
    const response = await fetch(searchUrl);
    const html = await response.text();
    
    // Try to find the first result link
    const match = html.match(/href="\/things\/([^"]+)"/);
    if (!match) {
      console.error(`No result found for ${country}`);
      return;
    }
    
    const thingSlug = match[1];
    const thingUrl = `https://www.thiings.co/things/${thingSlug}`;
    
    // Fetch the thing page
    const thingResponse = await fetch(thingUrl);
    const thingHtml = await thingResponse.text();
    
    // Extract image URL from Next.js image component
    const imageMatch = thingHtml.match(/url=https%3A%2F%2F([^&"]+)/);
    if (!imageMatch) {
      console.error(`Could not find image URL for ${country}`);
      return;
    }
    
    const imageUrl = decodeURIComponent(imageMatch[1]);
    const fullImageUrl = `https://${imageUrl}`;
    
    // Download the image
    const imageResponse = await fetch(fullImageUrl);
    if (!imageResponse.ok) {
      console.error(`Failed to download image for ${country}: ${imageResponse.statusText}`);
      return;
    }
    
    const imageBuffer = await imageResponse.arrayBuffer();
    const filename = `${outputDir}/${country.toLowerCase().replace(/\s+/g, '-')}.png`;
    
    await Bun.write(filename, imageBuffer);
    console.log(`✓ Downloaded ${country} -> ${filename}`);
  } catch (error) {
    console.error(`Error downloading ${country}:`, error);
  }
}

async function main() {
  console.log(`Downloading country symbols to ${outputDir}...\n`);
  
  for (const country of countries) {
    await downloadCountrySymbol(country);
    // Add a small delay to avoid rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("\n✓ All downloads complete!");
}

main().catch(console.error);

