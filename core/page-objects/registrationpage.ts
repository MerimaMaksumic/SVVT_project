import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";


const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let basePage: BasePage;




export class RegistrationPage extends BasePage {
    constructor(driver: WebDriver) {
        super(driver);
    }

    private userBtn: By = By.xpath("//div [@class='nav-item']//*[@href='https://buybook.ba/moj-nalog']");


    async clickUserButton(){
        await this.findElementAndClick(this.userBtn);
    }

    private registerBtn: By = By.xpath("//span [@class='text-muted'] //a[@href='https://buybook.ba/registracija']");

    async clickRegisterButton(){
        await this.findElementAndClick(this.registerBtn);
    }

    private firstName: By = By.id("name_1");

    async provideFirstName(){
        await this.fillInputField(this.firstName, testData.data.firstName);
    }

  private email: By = By.xpath("//input [@placeholder='Vaša e-mail adresa']");

  async provideEmail(){
        await this.fillInputField(this.email, testData.data.email);
    }

    private phone: By = By.xpath("//input [@placeholder='Vaš broj telefona']");
    async providePhone(){
        await this.fillInputField(this.phone, testData.data.phone);
    }

    private password: By = By.id("exampleInputPassword_01");
    async providePassword(){
        await this.fillInputField(this.password, testData.data.password);
    }

    private repeatPassword: By = By.xpath("//input [@name='password2']");
    async provideRepeatPassword(){
        await this.fillInputField(this.repeatPassword, testData.data.password);
    }

    private checkBox: By = By.id("form2Example3");
    async clickCheckBox(){
        await this.findElementAndClick(this.checkBox);
    }

    private SumbitBtn: By = By.xpath("//button [@name='kayit']");
    async clickSumbitBtn(){
        await this.findElementAndClick(this.SumbitBtn);
    }
}
