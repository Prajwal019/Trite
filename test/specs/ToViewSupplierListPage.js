import loginPage from "../pageobjects/login.page.js";
import homePage from "../pageobjects/home.page.js";
import supplierPage from "../pageobjects/supplier.page.js";
import { expect,assert } from "chai";
import productPage from "../pageobjects/product.page.js";
import excel from "../pageobjects/Exp.js";

describe('Supplier',()=>{
    it('ToviewSupplier',async()=>{
        await loginPage.openUrl();
        await loginPage.loginAsAdmin("unguardable","admin");
        await homePage.clickOnSupplierLink();
        // await browser.pause(4000);
        const exp=await $("//h4[contains(text(),'Supplier')]").getText();
        const act="Supplier ";
        console.log(exp);
    if(expect(exp).to.equal(act)){
        console.log("Results are matching");
    }
    })

    // it('addASupplier',async()=>{
    //     await loginPage.openUrl();
    //    await loginPage.loginAsAdmin("unguardable","admin");
    //    await homePage.clickOnSupplierLink();
    //    await supplierPage.clickOnAddSupplierIcon();
    //    const supplierName=excel.readDataFromExcel("Supplier",1,2);
    //    await browser.pause(4000);
    //    console.log(supplierName);
    //    const provinceName=excel.readDataFromExcel("Supplier",2,2);
    //    const cityName=excel.readDataFromExcel("Supplier",3,2);
    //    const phoneNumber=excel.readDataFromExcel("Supplier",4,2);
    //    await supplierPage.addSupplierDetails(supplierName,provinceName,cityName,phoneNumber);
    //    await supplierPage.clickOnSaveBtn();
    //    homePage.clickOnProductLink();
    //    productPage.ClickOnAddProductIcon();
    // })
})