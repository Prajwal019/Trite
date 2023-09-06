import loginPage from "../pageobjects/login.page.js"
import productCategoryPage from "../pageobjects/productCategory.page.js";

describe('Pos',()=>{
    it('AddCustomer',async()=>{
       await loginPage.openUrl();
       await loginPage.loginAsUser("test","test");
       await productCategoryPage.AddcustomerLookUpicon();
       


    })
})