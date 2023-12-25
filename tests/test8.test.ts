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
  }, 600000);
  
test("changelanguage: change language", async () => 
{
    await driver.navigate().to(url);
    await driver.manage().setTimeouts({ implicit: 15000000 });
    changeLanguage = new ChangeLanguage(driver); 
    
    await changeLanguage.clickFlagButton();
   // await new Promise((resolve) => setTimeout(resolve, 500000));
    await changeLanguage.clickChosenButton();

   // await new Promise((resolve) => setTimeout(resolve, 500000));
}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);