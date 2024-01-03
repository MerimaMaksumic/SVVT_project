import { Builder } from "selenium-webdriver";
import { ChangePassword } from "../core/page-objects/changepassword";

let driver;
let url = "https://buybook.ba/";

// Declare the variable
let changePassword: ChangePassword;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
    changePassword = new ChangePassword(driver);
}, 600000);

test("change password test", async () => {
    await changePassword.clickusericon();
    await changePassword.inputemail();
    await changePassword.inputpassword();
    await changePassword.clickprijava();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await changePassword.clickusericonagain();
    await changePassword.findlozinkabox();
    await changePassword.filloldpasswordfield();
    await changePassword.fillnewpasswordfield();
    await changePassword.fillnewpasswordfield2();
    await changePassword.clickconfirmpasswordbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    //to test if it is changed we have to log out and log in again with newPassword. If it is successfull then the password has been succesfully changed.
    await changePassword.clicklogout();
    await changePassword.clickusericon3();
    await changePassword.enteremailaddress2();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await changePassword.enterpassword2();
    await new Promise((resolve) => setTimeout(resolve, 5000));

    await changePassword.clickloginbutton2();
    await new Promise((resolve) => setTimeout(resolve, 5000));
},
    60000);


afterAll(async () => {

    await driver.quit();

}, 50000);