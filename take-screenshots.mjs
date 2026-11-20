// Run from the project root: node take-screenshots.mjs
import { chromium } from "playwright";
import { mkdirSync } from "node:fs";

const sites = {
  stunk: "https://stunk.dev",
  buzzable: "https://buzzable.com",
  ibrid: "https://useibrid.com",
  "nester-verify": "https://nesterverify.com/",
  "farms-mart": "https://olanrewaju-farms-mart.vercel.app/",
  mastan: "https://mastan-app.vercel.app/",
};

mkdirSync("public/projects", { recursive: true });
const browser = await chromium.launch();
for (const [name, url] of Object.entries(sites)) {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  try {
    await page.goto(url, { waitUntil: "networkidle", timeout: 45000 });
    await page.waitForTimeout(1500);
    await page.screenshot({ path: `public/projects/${name}.png` });
    console.log("saved", name);
  } catch (e) {
    console.log("failed", name, e.message.split("\n")[0]);
  }
  await page.close();
}
await browser.close();
