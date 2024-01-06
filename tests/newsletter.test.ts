import { Builder } from "selenium-webdriver";
import { Newsletter } from "../core/page-objects/newsletter";


let driver;
let url = "https://buybook.ba/";
let newsletter: Newsletter;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    newsletter = new Newsletter(driver);
}, 60000);

test("Newsletter subscription test", async () => {
    await newsletter.findFooter();
    await newsletter.inputemail();
    await newsletter.clickregistracijaButton();

    await new Promise((resolve) => setTimeout(resolve, 5000));

}, 50000);


afterAll(async () => {
    await driver.quit();
}, 50000);