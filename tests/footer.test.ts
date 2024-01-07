import { Builder } from "selenium-webdriver";
import { Footer } from "../core/page-objects/footerhyperlinks";

let driver;
let url = "https://buybook.ba/";


let footer: Footer;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
  footer = new Footer(driver);
}, 600000);

test("Footer Instagram Link Test", async () => {
  await footer.findfooter();
  await footer.clickinstalink();

  // Switch to the new tab if it opens in a new tab
  let handles = await driver.getAllWindowHandles();
  if (handles.length > 1) {
    await driver.switchTo().window(handles[1]);
  }

  await new Promise((resolve) => setTimeout(resolve,3000));
  await footer.checkinstaprofilematch();
  await new Promise((resolve) => setTimeout(resolve, 2000));


  //Close the new tab and switch back to the main window
  if (handles.length > 1) {
    await driver.close();
    await driver.switchTo().window(handles[0]);
    await new Promise((resolve) => setTimeout(resolve, 5000));

  }


}, 50000);


afterAll(async () => {

  await driver.quit();

}, 50000);