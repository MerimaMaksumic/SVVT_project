import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

let basePage: BasePage;
let testData: any; 

const dataFilePath = path.resolve(__dirname, "../data/data.json");

try {
    const jsonData = readFileSync(dataFilePath, "utf8");
    testData = JSON.parse(jsonData);
} catch (error) {
    console.error('Error parsing JSON:', error);
}


export class LoginPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private userBtn: By = By.xpath("//div [@class='nav-item']//*[@href='https://buybook.ba/moj-nalog']");


    async clickUserButton() {
        await this.findElementAndClick(this.userBtn);
    }

    private email: By = By.xpath("//input [@id='email_1']");

    async provideEmail() {
        await this.fillInputField(this.email, testData.data.email);
    }


    private password: By = By.xpath("//input [@id='exampleInputPassword01']");
    async providePassword() {
        await this.fillInputField(this.password, testData.data.password);
    }



    private SumbitBtn: By = By.xpath("//button[@name='giris']");
    async clickSumbitBtn() {
        await this.findElementAndClick(this.SumbitBtn);
    }
    private userBtnagain: By = By.xpath("//div [@class='nav-item']//*[@href='https://buybook.ba/moj-nalog']");


    async clickUserButtonagain() {
        await this.findElementAndClick(this.userBtnagain);
    }

    private namefield: By=By.xpath('/html/body/main/div/div/form/div/div[1]/div/div[1]/div/center/h6');
    async verifyname(){
        await this.checkMatchingElements(this.namefield, testData.data.verifyname);
    }

}
