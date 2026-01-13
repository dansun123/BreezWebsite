import { chromium } from 'playwright';

async function takeScreenshot() {
  const browser = await chromium.launch();
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });

  await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });
  await page.waitForTimeout(1000);

  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  console.log('Screenshot saved to screenshot.png');

  await browser.close();
}

takeScreenshot().catch(console.error);
