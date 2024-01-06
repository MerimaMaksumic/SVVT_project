import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let basePage: BasePage;




export class DeleteProduct extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private productBtn: By = By.xpath('//a [@class="slick-slide slick-current slick-active"]//div[@class="productCustomCard d-flex flex-wrap align-items-center justify-content-center px-1"]');


    async clickProduct() {
        await this.findElementAndClickEnsuringVisible(this.productBtn);
    }

    private addtocartBtn: By = By.xpath("//div [@class='cart-button col-12 d-flex justify-content-start align-items-center gap-2']");

    async addtoCartButton() {
        await this.findElementAndClick(this.addtocartBtn);
    }

    private CartBtn: By = By.xpath("//a [@data-bs-toggle='modal']");

    async clickcartbutton() {
        await this.findElementAndClick(this.CartBtn);
    }

    private xBtn: By = By.xpath("//a [@class='small text-dark ms-auto']");

    async clickXBtn() {
        await this.findElementAndClick(this.xBtn);
    }

    private CartBtn2: By = By.xpath('//a[@href="javascript:void(0)"]//i[@class="bi bi-cart"]');

    async clickcartbutton2() {
        await this.findElementAndClick(this.CartBtn);
    }

    private CartStatus: By = By.xpath('//h6[@class="m-0 fw-bold"]');

    async comparecartstatus() {
        await this.checkMatchingElements(this.CartStatus, testData.data.cart);
    }


}
