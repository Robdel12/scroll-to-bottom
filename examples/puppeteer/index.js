let puppeteer = require("puppeteer");
let scrollToBottom = require("../../index.js");

(async () => {
  // code goes here
  let browser = await puppeteer.launch({ headless: false });
  let page = await browser.newPage();

  await page.goto("http://www.onemilescroll.com");
  await page.evaluate(scrollToBottom);
  // with options:
  // await page.evaluate(scrollToBottom, { frequency: 100, timing: 5 });
  await browser.close();
})();
