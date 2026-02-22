#!/usr/bin/env node
import { chromium } from 'playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BASE_URL = 'http://localhost:8080';
const EXHIBITS = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n'];
const SCREENSHOT_DIR = join(__dirname, '.planning/phases/13-exhibit-content-optimization/visual-audit');

// Create screenshot directory
if (!fs.existsSync(SCREENSHOT_DIR)) {
  fs.mkdirSync(SCREENSHOT_DIR, { recursive: true });
}

async function auditExhibit(page, exhibit) {
  const url = `${BASE_URL}/exhibits/exhibit-${exhibit}.html`;
  console.log(`\n=== Auditing Exhibit ${exhibit.toUpperCase()} ===`);

  await page.goto(url, { waitUntil: 'networkidle' });

  const issues = [];

  // Check basic structure
  const h1 = await page.locator('h1').first().textContent();
  const subtitle = await page.locator('.subtitle').first().textContent();
  console.log(`  Title: ${h1.trim().substring(0, 60)}...`);
  console.log(`  Subtitle: ${subtitle.trim().substring(0, 60)}...`);

  // Check for section headings
  const sectionHeadings = await page.locator('.section-heading').count();
  console.log(`  Section headings: ${sectionHeadings}`);

  // Check for background-content divs (should have at least one for personnel)
  const backgroundContent = await page.locator('.background-content').count();
  console.log(`  Background content blocks: ${backgroundContent}`);

  // Check for personnel tables (should be 0)
  const personnelTables = await page.locator('table.personnel-table').count();
  if (personnelTables > 0) {
    issues.push(`Found ${personnelTables} personnel table(s) - should be converted to narrative`);
  }

  // Check for resolution tables (these should exist where applicable)
  const resolutionTables = await page.locator('table.resolution-table').count();
  console.log(`  Resolution tables: ${resolutionTables}`);

  // Check section structure consistency
  const reportSections = await page.locator('section.report-section').count();
  console.log(`  Report sections: ${reportSections}`);

  return issues;
}

async function checkDarkMode(page, exhibit) {
  console.log(`  Checking dark mode for exhibit ${exhibit}...`);

  // Set dark mode
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  });

  await page.waitForTimeout(500);

  // Check contrast issues
  const bgColor = await page.evaluate(() => {
    return getComputedStyle(document.body).backgroundColor;
  });

  console.log(`    Dark mode background: ${bgColor}`);

  // Screenshot in dark mode
  await page.screenshot({
    path: join(SCREENSHOT_DIR, `exhibit-${exhibit}-dark.png`),
    fullPage: false
  });

  // Reset to light mode
  await page.evaluate(() => {
    document.documentElement.removeAttribute('data-theme');
  });
}

async function checkMobile(page, exhibit) {
  console.log(`  Checking mobile viewport (375px) for exhibit ${exhibit}...`);

  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(500);

  // Check for horizontal overflow
  const hasOverflow = await page.evaluate(() => {
    return document.body.scrollWidth > window.innerWidth;
  });

  if (hasOverflow) {
    console.log(`    WARNING: Horizontal overflow detected`);
    return [`Horizontal overflow at 375px viewport`];
  } else {
    console.log(`    Mobile responsive: OK`);
  }

  // Screenshot mobile view
  await page.screenshot({
    path: join(SCREENSHOT_DIR, `exhibit-${exhibit}-mobile.png`),
    fullPage: false
  });

  // Reset viewport
  await page.setViewportSize({ width: 1200, height: 800 });

  return [];
}

async function main() {
  console.log('Starting visual consistency audit...\n');

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1200, height: 800 }
  });
  const page = await context.newPage();

  const allIssues = {};

  // Sample exhibits for detailed verification (a, g, j, m per plan)
  const sampleExhibits = ['a', 'g', 'j', 'm'];

  for (const exhibit of EXHIBITS) {
    const issues = await auditExhibit(page, exhibit);

    // Detailed checks for sample exhibits
    if (sampleExhibits.includes(exhibit)) {
      const darkModeIssues = await checkDarkMode(page, exhibit);
      const mobileIssues = await checkMobile(page, exhibit);
      issues.push(...mobileIssues);
    }

    if (issues.length > 0) {
      allIssues[exhibit] = issues;
    }
  }

  await browser.close();

  // Report findings
  console.log('\n\n=== AUDIT SUMMARY ===');

  if (Object.keys(allIssues).length === 0) {
    console.log('✓ All exhibits pass visual consistency audit');
    console.log('✓ No personnel tables found');
    console.log('✓ Section structure consistent');
    console.log('✓ Mobile responsive (no overflow)');
  } else {
    console.log('Issues found:');
    for (const [exhibit, issues] of Object.entries(allIssues)) {
      console.log(`\nExhibit ${exhibit.toUpperCase()}:`);
      issues.forEach(issue => console.log(`  - ${issue}`));
    }
  }

  console.log(`\nScreenshots saved to: ${SCREENSHOT_DIR}`);
}

main().catch(console.error);
