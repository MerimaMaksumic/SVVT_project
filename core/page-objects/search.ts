import { By, WebDriver, Key } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class Search extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private searchBtn: By = By.xpath("//div[@class='nav-item d-lg-flex d-none align-items-center justify-content-center gap-2 canceldiv']");
    private firstSearch: By = By.xpath("//input[@class='searchButtInput']");

    async clickSearchButton() {
        await this.findElementAndClick(this.searchBtn);
    }


    async provideFirstSearchAndPressEnter() {
        try {
            await this.fillInputField(this.firstSearch, testData.data.firstSearch);
            const inputElement = await this.driver.findElement(this.firstSearch);
            await inputElement.sendKeys(Key.ENTER);
            console.log("Filled input field and pressed Enter.");
            return true; 
        } catch (error) {
            console.error('Error providing first search and pressing Enter:', error);
            return false; 
        }
    }

    async clickSearchButton2() {
        await this.findElementAndClick(this.searchBtn);
    }

    private pathtoAutor: By=By.xpath("/html/body/main/section/div/div/div/a[3]/div/div[2]/p[2]");

    async verifyAutor(){
        await this.checkMatchingElements(this.pathtoAutor, testData.data.firstSearch)
    }
}
