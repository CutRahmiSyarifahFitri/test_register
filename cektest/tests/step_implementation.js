"use strict";
const path = require('path');
const {openBrowser, goto, click, into, write, below, checkbox, textBox, clear, closeBrowser, deleteCookies } = require('taiko');
const headless = process.env.headless_chrome.toLowerCase() === 'true';

beforeSuite(async () => {
    await openBrowser({ headless: false })
});

step("Page contains <content>", async (content) => {
    assert.ok(await text('FOO').exists());
}); 

afterSuite(async () => {
    await closeBrowser();
});

beforeScenario(async () => {
    await deleteCookies()
    await goto('https://academy.bitlabs.id/') //base_url is defined in properties file of env folder
});


// Return a screenshot file name
gauge.customScreenshotWriter = async function () {
    const screenshotFilePath = path.join(process.env['gauge_screenshots_dir'],
        `screenshot-${process.hrtime.bigint()}.png`);

    await screenshot({
        path: screenshotFilePath
    });
    return path.basename(screenshotFilePath);
};