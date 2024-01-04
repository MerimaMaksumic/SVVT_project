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
    deleteProduct = new DeleteProduct(driver);
  }, 600000);
  
test("addtocart: add product to cart", async () => 
{
    await deleteProduct.clickProduct();
    await deleteProduct.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.addtoCartButton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.clickcartbutton();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.clickXBtn();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.clickcartbutton2();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await deleteProduct.comparecartstatus();


}, 
1000000);
  
  
  afterAll(async () => {
  
    await driver.quit();
  
  }, 50000000);