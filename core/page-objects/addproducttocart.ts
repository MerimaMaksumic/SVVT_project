import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let basePage: BasePage;




export class AddProduct extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }


    private productBtn: By = By.xpath('//a [@class="slick-slide slick-current slick-active"]//div[@class="productCustomCard d-flex flex-wrap align-items-center justify-content-center px-1"]');


    async clickProduct(){
        await this.findElementAndClickEnsuringVisible(this.productBtn);
    }

    private addtocartBtn: By = By.xpath("//div [@class='cart-button col-12 d-flex justify-content-start align-items-center gap-2']");

    async addtoCartButton(){
        await this.findElementAndClickEnsuringVisible(this.addtocartBtn);
    }

   
    private CartBtn: By= By.xpath("//a [@data-bs-toggle='modal']");
    async clickCartBtn(driver){
        let element = await driver.findElement(this.CartBtn);
        await driver.executeScript("arguments[0].scrollIntoView(true);", element);
        await driver.wait(until.elementIsEnabled(element), 10000);

        // Using JavaScript to perform the click
        await driver.executeScript("arguments[0].click();", element);
    }


}
