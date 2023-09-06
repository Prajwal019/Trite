import loginPage from "../pageobjects/login.page.js"
import productCategoryPage from "../pageobjects/productCategory.page.js"
import { assert, expect } from "chai"

describe('Pos',()=>{
    it('AddAndRemoveProduct',async()=>{
        const product="Fantech EG1";
        const quants=19;
        await loginPage.openUrl();
        await loginPage.loginAsUser("test","test");
        await productCategoryPage.clickOnHeadsetLink();
        await productCategoryPage.requiredQuantity(product,quants);
        await browser.pause(4000);
        const Expproduct=await $("//tbody/tr/td[1]").getText();
        const Expquants=await $("//tbody/tr/td[2]").getText();
        console.log(Expproduct +":"+Expquants);
        //await productCategoryPage.toVerifyProductAndQuantity();
        assert(product,Expproduct);
        assert(quants,Expquants)
        await productCategoryPage.clickOnDeleteBtn();
        await browser.pause(4000); 
    })
})