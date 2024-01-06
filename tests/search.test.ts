import { Builder } from "selenium-webdriver";
import { Search } from "../core/page-objects/search";

let driver;
let url = "https://buybook.ba/";

let search: Search;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
}, 60000);

test("search: user search", async () => {
  await driver.navigate().to(url);
  await driver.manage().setTimeouts({ implicit: 15000000 });
  search = new Search(driver);

  // Introducing a delay of 5 seconds before clicking the search button - da bih vidjela radi li dobro
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await search.clickSearchButton();

  // Introducing another delay of 5 seconds before providing the search term and pressing Enter
  await search.provideFirstSearchAndPressEnter();

}, 50000);

afterAll(async () => {
  await driver.quit();
}, 50000);
