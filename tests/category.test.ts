import { Builder } from "selenium-webdriver";
import { Category } from "../core/page-objects/category";


let driver;
let url = "https://buybook.ba/";
let category: Category;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    category = new Category(driver);
}, 60000);

test("Categories test", async () => {
    await category.locatecategoryheader();
    await category.clickoureditions();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await category.clickbooknašaizdanja();
    await category.findIzdavača();
    await category.compareizdavača();
    await new Promise((resolve) => setTimeout(resolve, 5000));
},50000);


afterAll(async () => {
    await driver.quit();
}, 50000);