import { Builder } from "selenium-webdriver";
import { LoginPage } from "../core/page-objects/loginpage";
import { DeleteProduct } from "../core/page-objects/deletefromcart";

let driver;
let url = "https://buybook.ba/";

// Declare the variable
let deleteProduct: DeleteProduct;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
  }, 600000);
  
test("addtocart: add product to cart", async () => 
{
   await driver.navigate().to(url);
   await driver.manage().setTimeouts({ implicit: 15000000 });
   deleteProduct = new DeleteProduct(driver); // Instantiate the RegistrationPage object
   // timeout 
    //await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.clickProduct(); 
    await deleteProduct.addtoCartButton();
    //timeout
    //await new Promise((resolve) => setTimeout(resolve, 50000));
    await deleteProduct.clickCartBtn(driver);
    //await new Promise((resolve) => setTimeout(resolve, 50000));
    await deleteProduct.clickXBtn();
   


}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);