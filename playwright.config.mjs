import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for accessibility testing
 * Tests all 22 HTML pages for WCAG 2.1 AA compliance
 */
export default defineConfig({
  testDir: './tests',

  // Run tests in parallel
  fullyParallel: true,

  // Fail build on CI if tests were accidentally left in .only mode
  forbidOnly: !!process.env.CI,

  // Retry failed tests once
  retries: process.env.CI ? 2 : 0,

  // Use all available CPUs on CI, limit to 50% locally
  workers: process.env.CI ? undefined : '50%',

  // Reporter configuration
  reporter: [
    ['list'],  // Console output
    ['html', { outputFolder: 'playwright-report' }]  // HTML report
  ],

  // Shared settings for all tests
  use: {
    // Base URL for tests
    baseURL: 'http://localhost:8080',

    // Screenshot on failure
    screenshot: 'only-on-failure',

    // Trace on first retry
    trace: 'on-first-retry',
  },

  // Test projects for different browsers
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    // Uncomment for cross-browser testing (Phase 15-03)
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],

  // Start local web server before running tests
  webServer: {
    command: 'python3 -m http.server 8080',
    url: 'http://localhost:8080',
    reuseExistingServer: !process.env.CI,
    timeout: 10000,
  },
});
