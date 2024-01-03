import { Builder } from "selenium-webdriver";
import { RegistrationPage } from "../core/page-objects/registrationpage";

let driver;
let url = "https://buybook.ba/";

// Declare the variable
let registrationPage: RegistrationPage;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    // registrationPage = new RegistrationPage(driver);
  }, 600000);
  
test("registrationpage: user registration", async () => 
{
    await driver.navigate().to(url);
    await driver.manage().setTimeouts({ implicit: 15000000 });
    registrationPage = new RegistrationPage(driver); // Instantiate the RegistrationPage object
    await registrationPage.clickUserButton(); // Call the clickUserButton method on the object
    await registrationPage.clickRegisterButton();
    await registrationPage.provideFirstName();
    await registrationPage.provideEmail();
    await registrationPage.providePhone();
    await registrationPage.providePassword();
    await registrationPage.provideRepeatPassword();
    await registrationPage.clickCheckBox();
    await registrationPage.clickSumbitBtn();
}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);