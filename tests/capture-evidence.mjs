import { chromium } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { mkdirSync, writeFileSync } from 'fs';

/**
 * Evidence Capture Script for Accessibility QA
 *
 * Captures comprehensive visual and audit evidence:
 * - 88 screenshots (22 pages × 4 configurations)
 * - axe-core violation data for all pages
 *
 * Configurations:
 * - Light mode, desktop (1200px)
 * - Light mode, mobile (375px)
 * - Dark mode, desktop (1200px)
 * - Dark mode, mobile (375px)
 */

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const projectRoot = join(__dirname, '..');
const screenshotDir = join(projectRoot, '.planning/phases/15-comprehensive-accessibility-qa/screenshots');
const auditDir = join(projectRoot, '.planning/phases/15-comprehensive-accessibility-qa/audits');

// Create directories
mkdirSync(screenshotDir, { recursive: true });
mkdirSync(auditDir, { recursive: true });

// List of all 22 pages (from accessibility.spec.mjs)
const pages = [
  // Root pages
  { path: '/index.html', name: 'index' },
  { path: '/philosophy.html', name: 'philosophy' },
  { path: '/faq.html', name: 'faq' },
  { path: '/contact.html', name: 'contact' },
  { path: '/portfolio.html', name: 'portfolio' },
  { path: '/technologies.html', name: 'technologies' },
  { path: '/testimonials.html', name: 'field-reports' },

  // Exhibit pages
  { path: '/exhibits/exhibit-a.html', name: 'exhibit-a' },
  { path: '/exhibits/exhibit-b.html', name: 'exhibit-b' },
  { path: '/exhibits/exhibit-c.html', name: 'exhibit-c' },
  { path: '/exhibits/exhibit-d.html', name: 'exhibit-d' },
  { path: '/exhibits/exhibit-e.html', name: 'exhibit-e' },
  { path: '/exhibits/exhibit-f.html', name: 'exhibit-f' },
  { path: '/exhibits/exhibit-g.html', name: 'exhibit-g' },
  { path: '/exhibits/exhibit-h.html', name: 'exhibit-h' },
  { path: '/exhibits/exhibit-i.html', name: 'exhibit-i' },
  { path: '/exhibits/exhibit-j.html', name: 'exhibit-j' },
  { path: '/exhibits/exhibit-k.html', name: 'exhibit-k' },
  { path: '/exhibits/exhibit-l.html', name: 'exhibit-l' },
  { path: '/exhibits/exhibit-m.html', name: 'exhibit-m' },
  { path: '/exhibits/exhibit-n.html', name: 'exhibit-n' },
];

const configurations = [
  { mode: 'light', viewport: 'desktop', width: 1200, height: 800 },
  { mode: 'light', viewport: 'mobile', width: 375, height: 667 },
  { mode: 'dark', viewport: 'desktop', width: 1200, height: 800 },
  { mode: 'dark', viewport: 'mobile', width: 375, height: 667 },
];

async function captureEvidence() {
  console.log('Starting evidence capture...\n');
  console.log(`Pages to capture: ${pages.length}`);
  console.log(`Configurations per page: ${configurations.length}`);
  console.log(`Total screenshots: ${pages.length * configurations.length}\n`);

  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  // Collect audit data
  const auditData = {
    timestamp: new Date().toISOString(),
    wcagVersion: '2.1 AA',
    tooling: 'axe-core via @axe-core/playwright',
    pages: {}
  };

  let screenshotCount = 0;

  for (const pageInfo of pages) {
    console.log(`\n📄 Processing: ${pageInfo.name}`);
    auditData.pages[pageInfo.name] = {
      path: pageInfo.path,
      configurations: {}
    };

    for (const config of configurations) {
      const configKey = `${config.mode}-${config.viewport}`;
      console.log(`  📸 ${configKey}...`);

      // Set viewport
      await page.setViewportSize({ width: config.width, height: config.height });

      // Navigate to page
      await page.goto(`http://localhost:8080${pageInfo.path}`, { waitUntil: 'networkidle' });

      // Set theme
      if (config.mode === 'dark') {
        await page.evaluate(() => {
          localStorage.setItem('theme', 'dark');
          document.documentElement.classList.add('dark-mode');
        });
        // Wait for theme to apply
        await page.waitForTimeout(100);
      } else {
        await page.evaluate(() => {
          localStorage.removeItem('theme');
          document.documentElement.classList.remove('dark-mode');
        });
        // Wait for theme to apply
        await page.waitForTimeout(100);
      }

      // Take full page screenshot
      const screenshotPath = join(screenshotDir, `${pageInfo.name}-${config.mode}-${config.viewport}.png`);
      await page.screenshot({
        path: screenshotPath,
        fullPage: true
      });
      screenshotCount++;

      // Run axe-core audit (only once per mode, not per viewport)
      if (config.viewport === 'desktop') {
        const axeResults = await new AxeBuilder({ page })
          .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
          .analyze();

        auditData.pages[pageInfo.name].configurations[config.mode] = {
          violations: axeResults.violations.length,
          passes: axeResults.passes.length,
          incomplete: axeResults.incomplete.length,
          inapplicable: axeResults.inapplicable.length,
          violationDetails: axeResults.violations.map(v => ({
            id: v.id,
            impact: v.impact,
            description: v.description,
            nodes: v.nodes.length,
            wcagCriteria: v.tags.filter(t => t.startsWith('wcag'))
          }))
        };
      }
    }

    console.log(`  ✅ Complete: ${pageInfo.name}`);
  }

  await browser.close();

  // Write audit report
  const auditReportPath = join(auditDir, 'axe-core-results.json');
  writeFileSync(auditReportPath, JSON.stringify(auditData, null, 2));

  // Generate summary
  console.log('\n' + '='.repeat(60));
  console.log('EVIDENCE CAPTURE COMPLETE');
  console.log('='.repeat(60));
  console.log(`\n📸 Screenshots captured: ${screenshotCount}/${pages.length * configurations.length}`);
  console.log(`📁 Screenshot directory: ${screenshotDir}`);
  console.log(`\n📊 Audit data saved: ${auditReportPath}`);

  // Calculate summary stats
  let totalViolationsLight = 0;
  let totalViolationsDark = 0;
  let pagesPassingLight = 0;
  let pagesPassingDark = 0;

  for (const [pageName, pageData] of Object.entries(auditData.pages)) {
    const lightViolations = pageData.configurations.light?.violations || 0;
    const darkViolations = pageData.configurations.dark?.violations || 0;

    totalViolationsLight += lightViolations;
    totalViolationsDark += darkViolations;

    if (lightViolations === 0) pagesPassingLight++;
    if (darkViolations === 0) pagesPassingDark++;
  }

  console.log(`\n📈 Accessibility Results:`);
  console.log(`  Light mode: ${pagesPassingLight}/${pages.length} pages passing (${totalViolationsLight} violations)`);
  console.log(`  Dark mode: ${pagesPassingDark}/${pages.length} pages passing (${totalViolationsDark} violations)`);
  console.log('');
}

// Run the evidence capture
captureEvidence().catch(console.error);
