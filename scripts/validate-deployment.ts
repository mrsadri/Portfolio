#!/usr/bin/env bun
/**
 * Deployment Validation Script
 * 
 * Validates that the /docs folder is properly configured before deployment.
 * Run this before pushing to ensure GitHub Pages will work correctly.
 * 
 * Usage: bun run scripts/validate-deployment.ts
 */

import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

const REQUIRED_FILES = [
  "docs/index.html",
  "docs/404.html",
  "docs/.nojekyll",
  "docs/main.js",
  "docs/main.css",
  "docs/client/main.js",
  "docs/images",
  "docs/my-story/index.html",
  "docs/my-story.html",
  "docs/contact/index.html",
  "docs/contact.html",
  "docs/resume/index.html",
  "docs/resume.html",
  "docs/case-studies/divar-secure-call/index.html",
  "docs/case-studies/setare-aval-engagement/index.html",
  "docs/case-studies/setare-yek-bill-payment/index.html",
];

const errors: string[] = [];
const warnings: string[] = [];

console.log("🔍 Validating deployment configuration...\n");

// Check required files
console.log("📁 Checking required files...");
for (const file of REQUIRED_FILES) {
  if (!existsSync(file)) {
    errors.push(`Missing required file: ${file}`);
  } else {
    console.log(`  ✅ ${file}`);
  }
}

// Check 404.html contains redirect logic
console.log("\n🔄 Checking 404.html redirect logic...");
const notFoundPath = "docs/404.html";
if (existsSync(notFoundPath)) {
  const content = readFileSync(notFoundPath, "utf-8");
  if (!content.includes("portfolio-spa-redirect")) {
    errors.push("404.html missing SPA redirect logic");
  } else if (!content.includes("window.location.replace")) {
    errors.push("404.html missing redirect call");
  } else {
    console.log("  ✅ 404.html has correct redirect logic");
  }
}

// Check index.html contains path restoration
console.log("\n🔁 Checking index.html path restoration...");
const indexPath = "docs/index.html";
if (existsSync(indexPath)) {
  const content = readFileSync(indexPath, "utf-8");
  if (!content.includes("restoreSpaPath")) {
    warnings.push("index.html missing restoreSpaPath function (may affect routing)");
  } else {
    console.log("  ✅ index.html has path restoration logic");
  }
}

// Check main.js references correct public path
console.log("\n🔗 Checking chunk import paths...");
const mainJsPath = "docs/client/main.js";
if (existsSync(mainJsPath)) {
  const content = readFileSync(mainJsPath, "utf-8");
  
  // Check for correct paths
  if (content.includes("/Portfolio/client/")) {
    console.log("  ✅ Chunks reference correct path: /Portfolio/client/");
  } else if (content.includes("/client/")) {
    console.log("  ✅ Chunks reference correct path: /client/");
  } else {
    errors.push("main.js chunk imports don't reference correct public path");
  }
  
  // Check for incorrect paths
  if (content.includes("/Portfolio/docs/client/")) {
    errors.push("main.js contains incorrect path: /Portfolio/docs/client/ (should be /Portfolio/client/)");
  }
  if (content.includes("/docs/client/")) {
    errors.push("main.js contains incorrect path: /docs/client/ (should be /client/)");
  }
  
  // CRITICAL: Verify all referenced chunks actually exist
  console.log("\n🔍 Verifying chunk file integrity...");
  const chunkMatches = content.match(/chunk-[a-z0-9]+\.js/g);
  if (chunkMatches) {
    const uniqueChunks = [...new Set(chunkMatches)];
    let missingChunks = 0;
    let foundChunks = 0;
    
    for (const chunk of uniqueChunks) {
      const chunkPath = join("docs/client", chunk);
      if (existsSync(chunkPath)) {
        foundChunks++;
      } else {
        errors.push(`Referenced chunk file missing: ${chunkPath}`);
        missingChunks++;
      }
    }
    
    if (missingChunks === 0) {
      console.log(`  ✅ All ${foundChunks} referenced chunks exist in docs/client/`);
    } else {
      console.log(`  ❌ ${missingChunks} chunk(s) missing, ${foundChunks} found`);
    }
  }
}

// Check package.json homepage
console.log("\n🏠 Checking package.json homepage...");
const packageJson = JSON.parse(readFileSync("package.json", "utf-8"));
if (packageJson.homepage) {
  console.log(`  ✅ Homepage set: ${packageJson.homepage}`);
  if (!packageJson.homepage.endsWith("/Portfolio/") && !packageJson.homepage.endsWith("/Portfolio")) {
    warnings.push(`Homepage should end with /Portfolio/: ${packageJson.homepage}`);
  }
} else {
  warnings.push("package.json missing 'homepage' field");
}

// Check .nojekyll exists
console.log("\n🚫 Checking .nojekyll file...");
if (existsSync("docs/.nojekyll")) {
  console.log("  ✅ .nojekyll file exists (Jekyll disabled)");
} else {
  errors.push("Missing docs/.nojekyll file (GitHub Pages may try to process with Jekyll)");
}

// Check GitHub Actions workflow
console.log("\n⚙️  Checking GitHub Actions workflow...");
const workflowPaths = [".github/workflows/deploy.yml", ".github/workflows/pages.yml"];
let workflowFound = false;
for (const workflowPath of workflowPaths) {
  if (existsSync(workflowPath)) {
    const content = readFileSync(workflowPath, "utf-8");
    if (content.includes("upload-pages-artifact") && content.includes("./docs")) {
      console.log(`  ✅ GitHub Actions workflow configured correctly (${workflowPath})`);
      workflowFound = true;
      break;
    } else {
      warnings.push(`GitHub Actions workflow may not be configured correctly (${workflowPath})`);
      workflowFound = true;
      break;
    }
  }
}
if (!workflowFound) {
  warnings.push("GitHub Actions workflow not found (manual deployment will be required)");
}

// Print summary
console.log("\n" + "=".repeat(60));
console.log("📊 VALIDATION SUMMARY");
console.log("=".repeat(60) + "\n");

if (errors.length === 0 && warnings.length === 0) {
  console.log("✅ All checks passed! Deployment configuration is correct.\n");
  console.log("📝 Next steps:");
  console.log("   1. Commit changes: git add docs/ && git commit -m 'Build for deployment'");
  console.log("   2. Push to GitHub: git push origin main");
  console.log("   3. Configure GitHub Pages (if not done):");
  console.log("      https://github.com/mrsadri/Portfolio/settings/pages");
  console.log("      - Source: 'Deploy from a branch' or 'GitHub Actions'");
  console.log("      - Branch: main");
  console.log("      - Folder: /docs");
  console.log("\n");
  process.exit(0);
}

if (warnings.length > 0) {
  console.log(`⚠️  ${warnings.length} Warning(s):\n`);
  for (const warning of warnings) {
    console.log(`   ⚠️  ${warning}`);
  }
  console.log("\n");
}

if (errors.length > 0) {
  console.log(`❌ ${errors.length} Error(s):\n`);
  for (const error of errors) {
    console.log(`   ❌ ${error}`);
  }
  console.log("\n");
  console.log("🔧 Fix these errors before deploying!");
  console.log("   Run: bun run build");
  console.log("   Then: bun run validate-deployment\n");
  process.exit(1);
}

console.log("✅ Validation complete with warnings. Deployment should work, but review warnings.\n");
process.exit(0);

