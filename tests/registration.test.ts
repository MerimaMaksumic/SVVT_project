import { Builder } from "selenium-webdriver";
import { RegistrationPage } from "../core/page-objects/registrationpage";

let driver;
let url = "https://buybook.ba/";


let registrationPage: RegistrationPage;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
  // registrationPage = new RegistrationPage(driver);
}, 600000);

test("registrationpage: user registration", async () => {
  await driver.navigate().to(url);
  await driver.manage().setTimeouts({ implicit: 15000000 });
  registrationPage = new RegistrationPage(driver); 
  await registrationPage.clickUserButton();
  await registrationPage.clickRegisterButton();
  await registrationPage.provideFirstName();
  await registrationPage.provideEmail();
  await registrationPage.providePhone();
  await registrationPage.providePassword();
  await registrationPage.provideRepeatPassword();
  await registrationPage.clickCheckBox();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await registrationPage.clickCheckBox();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await registrationPage.clickSumbitBtn();
},
  1000000);


afterAll(async () => {

  await driver.quit();

}, 50000000);