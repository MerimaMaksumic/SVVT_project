import { Builder } from "selenium-webdriver";
import { Smoke } from "../core/page-objects/smoketest";

let driver;
let url = "https://buybook.ba/";
let smoke: Smoke;


beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    smoke = new Smoke(driver);
}, 600000);

test("Smoke test", async () => {
    await smoke.clickProduct();
    await smoke.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.clickcartbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.clickzavrsinarudzbubutton();
    await smoke.inputimeiprezime();
    await smoke.inputemail();
    await smoke.inputphonenumber();
    await smoke.inputgrad();
    await smoke.inputokrug();
    await smoke.clickcountry();
    await smoke.inputzipcode();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.inputadresafield();
    await smoke.inputnapomenafield();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.paymenttypefind();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await smoke.choosepaymenttype();
    await new Promise((resolve) => setTimeout(resolve, 5000));


    //await smoke.clickfinalizirajnarudzbubutton(); 


}, 500000);


afterAll(async () => {

    await driver.quit();

}, 50000);