import { Builder } from "selenium-webdriver";
import { AddProduct } from "../core/page-objects/addproducttocart";

let driver;
let url = "https://buybook.ba/";


let addProduct: AddProduct;

beforeAll(async () => {
  driver = await new Builder().forBrowser("chrome").build();
  await driver.get(url);
  await driver.manage().window().maximize();
}, 600000);

test("addtocart: add product to cart", async () => {
  await driver.navigate().to(url);
  await driver.manage().setTimeouts({ implicit: 1500000 });
  addProduct = new AddProduct(driver);
   
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await addProduct.clickProduct();
  await addProduct.getProductName();

   await new Promise((resolve) => setTimeout(resolve, 5000));
  await addProduct.addtoCartButton();
  
   await new Promise((resolve) => setTimeout(resolve, 5000));
  await addProduct.clickCartBtn(driver);

  await new Promise((resolve) => setTimeout(resolve, 5000));
  
  await new Promise((resolve) => setTimeout(resolve, 5000));
  await addProduct.checkproductCartName();
 

},
  500000);


afterAll(async () => {

  await driver.quit();

}, 50000000);