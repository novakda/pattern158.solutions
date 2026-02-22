import { chromium } from '@playwright/test';

const AFFECTED_PAGES = [
  { name: 'exhibit-a', url: '/exhibits/exhibit-a.html', selector: '.probable-cause-box' },
  { name: 'exhibit-e', url: '/exhibits/exhibit-e.html', selector: '.probable-cause-box' },
  { name: 'exhibit-j', url: '/exhibits/exhibit-j.html', selector: '.probable-cause-box' },
  { name: 'exhibit-m', url: '/exhibits/exhibit-m.html', selector: '.probable-cause-box' },
  { name: 'exhibit-n', url: '/exhibits/exhibit-n.html', selector: '.probable-cause-box' },
];

const OUTPUT_DIR = '.planning/phases/15-comprehensive-accessibility-qa/screenshots/key-fact-issue';

async function captureScreenshots() {
  const browser = await chromium.launch();

  for (const page of AFFECTED_PAGES) {
    const context = await browser.newContext({ viewport: { width: 1200, height: 900 } });
    const tab = await context.newPage();

    // Light mode
    await tab.goto(`http://localhost:8080${page.url}`, { waitUntil: 'networkidle' });
    const boxes = await tab.$$(page.selector);
    for (let i = 0; i < boxes.length; i++) {
      const hasKeyFact = await boxes[i].$('.key-fact');
      if (hasKeyFact) {
        await boxes[i].screenshot({ path: `${OUTPUT_DIR}/${page.name}-light-probable-cause-${i}.png` });
        console.log(`Captured: ${page.name}-light-probable-cause-${i}.png`);
      }
    }

    // Dark mode
    await tab.evaluate(() => {
      document.documentElement.setAttribute('data-theme', 'dark');
    });
    await tab.waitForTimeout(300);
    for (let i = 0; i < boxes.length; i++) {
      const hasKeyFact = await boxes[i].$('.key-fact');
      if (hasKeyFact) {
        await boxes[i].screenshot({ path: `${OUTPUT_DIR}/${page.name}-dark-probable-cause-${i}.png` });
        console.log(`Captured: ${page.name}-dark-probable-cause-${i}.png`);
      }
    }

    await context.close();
  }

  await browser.close();
  console.log('Done capturing key-fact issue screenshots');
}

captureScreenshots().catch(console.error);
