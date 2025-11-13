import puppeteer from "puppeteer";
import { join } from "node:path";

const PORT = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;
const URL = `http://localhost:${PORT}`;
const OUTPUT_PATH = join(process.cwd(), "images", "hero-section-og.png");

async function waitForServer(url: string, maxAttempts = 30): Promise<boolean> {
  for (let i = 0; i < maxAttempts; i++) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return true;
      }
    } catch {
      // Server not ready yet
    }
    await new Promise((resolve) => setTimeout(resolve, 1000));
  }
  return false;
}

async function generateHeroImage() {
  console.log(`🌐 Checking if server is running at ${URL}...`);
  
  const serverReady = await waitForServer(URL);
  if (!serverReady) {
    console.error(`❌ Server is not running at ${URL}`);
    console.error("Please start the dev server first: bun dev");
    process.exit(1);
  }

  console.log("✅ Server is ready");
  console.log("🚀 Launching browser...");

  const browser = await puppeteer.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to a standard OG image size (1200x630 is common, but we'll use 1200x800 for hero section)
    await page.setViewport({
      width: 1200,
      height: 800,
      deviceScaleFactor: 2, // Higher DPI for better quality
    });

    console.log(`📄 Navigating to ${URL}...`);
    await page.goto(URL, {
      waitUntil: "networkidle0",
      timeout: 30000,
    });

    // Wait for the hero section to be fully rendered
    console.log("⏳ Waiting for hero section to render...");
    await page.waitForSelector("section", { timeout: 10000 });
    
    // Wait for images to load
    await page.evaluate(() => {
      return Promise.all(
        Array.from(document.images).map((img) => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve, reject) => {
            img.onload = resolve;
            img.onerror = resolve; // Continue even if image fails
            setTimeout(resolve, 3000); // Timeout after 3s
          });
        })
      );
    });
    
    // Wait a bit more for fonts and animations
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("📸 Taking screenshot of hero section...");
    
    // Get the bounding box of the hero section (first section on the page)
    const boundingBox = await page.evaluate(() => {
      const sections = Array.from(document.querySelectorAll("section"));
      const heroSection = sections[0];
      if (!heroSection) return null;
      
      const rect = heroSection.getBoundingClientRect();
      return {
        x: Math.max(0, Math.round(rect.x)),
        y: Math.max(0, Math.round(rect.y)),
        width: Math.round(rect.width),
        height: Math.round(rect.height),
      };
    });

    if (!boundingBox) {
      throw new Error("Could not get hero section bounding box");
    }

    console.log(`📏 Hero section dimensions: ${boundingBox.width}x${boundingBox.height}px`);

    // Take screenshot of the hero section
    // Use the full hero section dimensions for the OG image
    const screenshot = await page.screenshot({
      clip: {
        x: boundingBox.x,
        y: boundingBox.y,
        width: boundingBox.width,
        height: boundingBox.height,
      },
      type: "png",
    });

    // Write the screenshot to file (Bun.write will create directories if needed)
    await Bun.write(OUTPUT_PATH, screenshot);

    console.log(`✅ Hero section image saved to: ${OUTPUT_PATH}`);
    console.log(`📏 Dimensions: ${boundingBox.width}x${boundingBox.height}px`);
  } catch (error) {
    console.error("❌ Error generating hero image:", error);
    throw error;
  } finally {
    await browser.close();
  }
}

generateHeroImage().catch((error) => {
  console.error("Failed to generate hero image:", error);
  process.exit(1);
});

