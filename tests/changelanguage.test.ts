import { Builder } from "selenium-webdriver";
import { ChangeLanguage } from "../core/page-objects/changelanguage";

let driver;
let url = "https://buybook.ba/";

// Declare the variable
let changeLanguage: ChangeLanguage;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    changeLanguage = new ChangeLanguage(driver);
  }, 600000);
  
test("changelanguage: change language", async () => 
{
  await changeLanguage.clickFlagButton();
  await changeLanguage.clickChosenLanguage();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await changeLanguage.clickFlagButton2();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await changeLanguage.comparechangelanguage();
  await new Promise((resolve) => setTimeout(resolve, 5000));
}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);