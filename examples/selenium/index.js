let { Builder, until } = require("selenium-webdriver");
let scrollToBottom = require("../../index.js");

(async function() {
  let driver = await new Builder().forBrowser("chrome").build();

  async function sdkTestWebsite() {
    await percySnapshot(driver, "Percy test");
  }

  try {
    await driver.get("http://www.onemilescroll.com");
    await driver.wait(until.titleIs("One Mile Scroll"), 1000);
    await driver.executeScript(scrollToBottom);
  } finally {
    await driver.quit();
  }
})();
