import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility Test Suite for pattern158.solutions
 *
 * Tests all 23 HTML pages for:
 * - WCAG 2.1 AA compliance (via axe-core)
 * - Semantic structure (landmarks, headings, images)
 * - Light and dark mode support
 *
 * Requirements: A11Y-06, A11Y-03
 */

// List of all pages to test
const pages = [
  // Root pages
  { path: '/index.html', name: 'Home' },
  { path: '/philosophy.html', name: 'Philosophy' },
  { path: '/faq.html', name: 'FAQ' },
  { path: '/contact.html', name: 'Contact' },
  { path: '/portfolio.html', name: 'Portfolio' },
  { path: '/technologies.html', name: 'Technologies' },
  { path: '/testimonials.html', name: 'Field Reports' },
  { path: '/accessibility.html', name: 'Accessibility' },

  // Exhibit pages
  { path: '/exhibits/exhibit-a.html', name: 'Exhibit A - Electric Boat' },
  { path: '/exhibits/exhibit-b.html', name: 'Exhibit B - Recognition Cascade' },
  { path: '/exhibits/exhibit-c.html', name: 'Exhibit C - Content Remediation' },
  { path: '/exhibits/exhibit-d.html', name: 'Exhibit D - Xyleme Flash Migration' },
  { path: '/exhibits/exhibit-e.html', name: 'Exhibit E - Cross-Domain SCORM' },
  { path: '/exhibits/exhibit-f.html', name: 'Exhibit F - HSBC' },
  { path: '/exhibits/exhibit-g.html', name: 'Exhibit G - Entergy Integration' },
  { path: '/exhibits/exhibit-h.html', name: 'Exhibit H - FPL Flash Conversion' },
  { path: '/exhibits/exhibit-i.html', name: 'Exhibit I - Exelon Dispatch' },
  { path: '/exhibits/exhibit-j.html', name: 'Exhibit J - GM Course Investigation' },
  { path: '/exhibits/exhibit-k.html', name: 'Exhibit K - Microsoft MCAPS AI' },
  { path: '/exhibits/exhibit-l.html', name: 'Exhibit L - Power Platform Audit' },
  { path: '/exhibits/exhibit-m.html', name: 'Exhibit M - SCORM Debugger' },
  { path: '/exhibits/exhibit-n.html', name: 'Exhibit N - BP Learning Platform' },
];

// Test group 1: WCAG 2.1 AA Compliance (Light Mode)
test.describe('WCAG 2.1 AA Compliance - Light Mode', () => {
  for (const page of pages) {
    test(`${page.name} - Light Mode`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Run axe-core with WCAG 2.1 AA tags
      const accessibilityScanResults = await new AxeBuilder({ page: browserPage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // Assert zero violations
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

// Test group 2: WCAG 2.1 AA Compliance (Dark Mode)
test.describe('WCAG 2.1 AA Compliance - Dark Mode', () => {
  for (const page of pages) {
    test(`${page.name} - Dark Mode`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Activate dark mode by setting the data-theme attribute
      await browserPage.evaluate(() => {
        document.documentElement.setAttribute('data-theme', 'dark');
      });

      // Wait for theme transition
      await browserPage.waitForTimeout(100);

      // Run axe-core with WCAG 2.1 AA tags
      const accessibilityScanResults = await new AxeBuilder({ page: browserPage })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      // Assert zero violations
      expect(accessibilityScanResults.violations).toEqual([]);
    });
  }
});

// Test group 3: Semantic Structure
test.describe('Semantic Structure', () => {
  for (const page of pages) {
    test(`${page.name} - Has required landmarks`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Check for exactly one <main> landmark
      const mainCount = await browserPage.locator('main').count();
      expect(mainCount).toBe(1);

      // Check for <header> landmark
      const headerCount = await browserPage.locator('header').count();
      expect(headerCount).toBeGreaterThanOrEqual(1);

      // Check for <footer> landmark
      const footerCount = await browserPage.locator('footer').count();
      expect(footerCount).toBeGreaterThanOrEqual(1);

      // Check for <nav> landmark
      const navCount = await browserPage.locator('nav').count();
      expect(navCount).toBeGreaterThanOrEqual(1);
    });

    test(`${page.name} - Has skip-to-content link`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Check for skip link targeting #main-content
      const skipLink = browserPage.locator('a[href="#main-content"]');
      await expect(skipLink).toHaveCount(1);

      // Verify skip link text
      const skipLinkText = await skipLink.textContent();
      expect(skipLinkText).toContain('Skip to main content');
    });

    test(`${page.name} - Has single h1 and proper heading hierarchy`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Check for exactly one h1
      const h1Count = await browserPage.locator('h1').count();
      expect(h1Count).toBe(1);

      // Get all heading levels
      const headings = await browserPage.locator('h1, h2, h3, h4, h5, h6').all();
      const headingLevels = await Promise.all(
        headings.map(async (h) => {
          const tagName = await h.evaluate(el => el.tagName);
          return parseInt(tagName.charAt(1));
        })
      );

      // Verify no skipped levels (e.g., h1 -> h3 without h2)
      for (let i = 0; i < headingLevels.length - 1; i++) {
        const currentLevel = headingLevels[i];
        const nextLevel = headingLevels[i + 1];

        // Next heading should be same level, one level up, or one level down
        // Should NOT skip levels (e.g., h1 -> h3)
        if (nextLevel > currentLevel) {
          expect(nextLevel).toBeLessThanOrEqual(currentLevel + 1);
        }
      }
    });

    test(`${page.name} - All images have alt attributes`, async ({ page: browserPage }) => {
      await browserPage.goto(page.path);

      // Get all img elements
      const images = await browserPage.locator('img').all();

      // Verify each image has an alt attribute
      for (const img of images) {
        const alt = await img.getAttribute('alt');
        expect(alt).not.toBeNull();
      }
    });
  }
});

// Test group 4: Interactive Elements
test.describe('Interactive Elements - ARIA Attributes', () => {
  test('Navigation has proper ARIA labels', async ({ page: browserPage }) => {
    await browserPage.goto('/index.html');

    // Check nav has aria-label
    const nav = browserPage.locator('nav');
    const ariaLabel = await nav.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();

    // Check hamburger has aria-expanded and aria-label
    const hamburger = browserPage.locator('.hamburger');
    const ariaExpanded = await hamburger.getAttribute('aria-expanded');
    const hamburgerLabel = await hamburger.getAttribute('aria-label');
    expect(ariaExpanded).toBe('false');
    expect(hamburgerLabel).toContain('navigation');
  });

  test('Theme toggle has proper ARIA attributes', async ({ page: browserPage }) => {
    await browserPage.goto('/index.html');

    // Check theme toggle has aria-pressed and aria-label
    const themeToggle = browserPage.locator('#theme-toggle');
    const ariaPressed = await themeToggle.getAttribute('aria-pressed');
    const ariaLabel = await themeToggle.getAttribute('aria-label');

    expect(ariaPressed).toBeTruthy();  // Should be "true" or "false"
    expect(ariaLabel).toContain('dark mode');
  });

  test('Active navigation items have aria-current', async ({ page: browserPage }) => {
    // Test home page
    await browserPage.goto('/index.html');
    let activeLink = browserPage.locator('nav a[aria-current="page"]');
    await expect(activeLink).toHaveCount(1);
    await expect(activeLink).toHaveAttribute('href', '/index.html');

    // Test another page
    await browserPage.goto('/faq.html');
    activeLink = browserPage.locator('nav a[aria-current="page"]');
    await expect(activeLink).toHaveCount(1);
    await expect(activeLink).toHaveAttribute('href', '/faq.html');
  });
});
