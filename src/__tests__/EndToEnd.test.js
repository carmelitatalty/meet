import puppeteer from "puppeteer";

describe("show/hide an event details", () => {
 
  let browser;
  let page;
  jest.setTimeout(10000)
  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:3000/");
    await page.waitForSelector(".event");
  });

  afterAll(() => {
    browser.close();
  });
  test("An event element is collapsed by default", async () => {
    const eventDetail = await page.$(".event .details");
    expect(eventDetail).toBeNull();
  });

  test("User can expand an event to see details", async () => {
    await page.click(".event .details-btn");
    const eventDetail = await page.$(".event .details");
    expect(eventDetail).toBeDefined();
  });
});

