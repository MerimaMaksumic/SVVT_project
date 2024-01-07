import { Builder } from "selenium-webdriver";
import { LoginPage } from "../core/page-objects/loginpage";

let driver;
let url = "https://buybook.ba/";


let loginPage: LoginPage;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
}, 600000);

test("loginpage: user login", async () => {
  await driver.navigate().to(url);
  await driver.manage().setTimeouts({ implicit: 15000000 });
  loginPage = new LoginPage(driver);
  await loginPage.clickUserButton();
  await loginPage.provideEmail();
  await loginPage.providePassword();
  await loginPage.clickSumbitBtn();
  await loginPage.clickUserButtonagain();
  await loginPage.verifyname();
  /*await new Promise((resolve) => setTimeout(resolve, 500000));*/
},
  1000000);


afterAll(async () => {

  await driver.quit();

}, 50000);
