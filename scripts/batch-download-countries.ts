#!/usr/bin/env tsx
/**
 * Batch download country symbols from thiings.co
 * This script navigates to each country page and downloads the image
 */

const countries = [
  { name: "Netherlands", slug: "netherlands", url: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-C48t229HBFpS5D4YDkfcteT9L8By0V.png" },
  { name: "Ireland", slug: "ireland", url: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-oUrrR5mM9E54S3pjg9cJcgNNhwGuWW.png" },
  { name: "Germany", slug: "germany", url: "https://lftz25oez4aqbxpq.public.blob.vercel-storage.com/image-ChVtDFFsAJc9Sf5dtytqV6KSUwelmY.png" },
  { name: "Sweden", slug: "sweden" },
  { name: "Denmark", slug: "denmark" },
  { name: "Finland", slug: "finland" },
  { name: "Portugal", slug: "portugal" },
  { name: "Spain", slug: "spain" },
  { name: "Austria", slug: "austria" },
  { name: "Belgium", slug: "belgium" },
  { name: "Switzerland", slug: "switzerland" },
  { name: "Estonia", slug: "estonia" },
  { name: "Czech Republic", slug: "czech-republic" },
  { name: "Poland", slug: "poland" },
  { name: "France", slug: "france" },
  { name: "Italy", slug: "italy" },
  { name: "Norway", slug: "norway" },
  { name: "Luxembourg", slug: "luxembourg" },
  { name: "Hungary", slug: "hungary" },
  { name: "Greece", slug: "greece" },
];

const outputDir = "./images/countries";

async function downloadImage(url: string, filename: string): Promise<boolean> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP ${response.status}`);
    }
    const buffer = await response.arrayBuffer();
    await Bun.write(filename, buffer);
    return true;
  } catch (error) {
    console.error(`✗ Failed to download ${filename}:`, error);
    return false;
  }
}

async function getImageUrlFromPage(slug: string): Promise<string | null> {
  try {
    const pageUrl = `https://www.thiings.co/things/${slug}`;
    const response = await fetch(pageUrl);
    const html = await response.text();
    
    // Extract image URL from Next.js image component
    const imageMatch = html.match(/url=https%3A%2F%2F([^&"]+)/);
    if (imageMatch) {
      return `https://${decodeURIComponent(imageMatch[1])}`;
    }
    
    // Try alternative pattern
    const altMatch = html.match(/src="https:\/\/[^"]*blob[^"]*"/);
    if (altMatch) {
      return altMatch[1].replace(/^src="/, '').replace(/"$/, '');
    }
    
    return null;
  } catch (error) {
    console.error(`Error fetching page for ${slug}:`, error);
    return null;
  }
}

async function main() {
  console.log(`Downloading country symbols to ${outputDir}...\n`);
  
  for (const country of countries) {
    const filename = `${outputDir}/${country.name.toLowerCase().replace(/\s+/g, '-')}.png`;
    
    // Use provided URL or fetch from page
    let imageUrl = country.url;
    if (!imageUrl) {
      console.log(`Fetching URL for ${country.name}...`);
      imageUrl = await getImageUrlFromPage(country.slug);
      if (!imageUrl) {
        console.log(`⚠ Skipping ${country.name} - could not find image URL`);
        continue;
      }
    }
    
    const success = await downloadImage(imageUrl, filename);
    if (success) {
      console.log(`✓ Downloaded ${country.name}`);
    }
    
    // Rate limiting
    await new Promise(resolve => setTimeout(resolve, 1000));
  }
  
  console.log("\n✓ Download complete!");
}

main().catch(console.error);

