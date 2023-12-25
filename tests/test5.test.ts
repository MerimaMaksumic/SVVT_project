import { Builder } from "selenium-webdriver";
import { LoginPage } from "../core/page-objects/loginpage";
import { AddProduct } from "../core/page-objects/addproducttocart";

let driver;
let url = "https://buybook.ba/";

// Declare the variable
let addProduct: AddProduct;

beforeAll(async () => {
    driver = await new Builder().forBrowser("chrome").build();
    await driver.get(url);
    await driver.manage().window().maximize();
  }, 600000);
  
test("addtocart: add product to cart", async () => 
{
   await driver.navigate().to(url);
   await driver.manage().setTimeouts({ implicit: 15000000 });
   addProduct = new AddProduct(driver); // Instantiate the RegistrationPage object
   // timeout 
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await addProduct.clickProduct(); // Call the clickUserButton method on the object
    // await addProduct.addtoCartButton();
}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);