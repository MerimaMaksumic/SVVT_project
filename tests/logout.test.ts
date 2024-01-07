import { Builder } from "selenium-webdriver";
import { LogoutPage } from "../core/page-objects/logout";

let driver;
let url = "https://buybook.ba/";
let logout: LogoutPage;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    logout = new LogoutPage(driver);
  }, 60000);

test("Logout", async () => 
{
    await logout.clickusericon();
    await logout.inputemail();
    await logout.inputpassword();
    await logout.clickprijava();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await logout.clickusericonagain();
    await logout.locatesidebar();
    await logout.clicklogoutbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await logout.clickusericon2();
    await logout.compareprijavaheader();
    await new Promise((resolve) => setTimeout(resolve, 5000));
}, 
50000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000);