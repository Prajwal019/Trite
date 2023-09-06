import loginPage from "../pageobjects/login.page.js"
import homePage from "../pageobjects/home.page.js"
import { expect,assert } from "chai";
 
describe('addProduct',()=>{
    it('login',async()=>{
        await loginPage.openUrl();
        await loginPage.loginAsAdmin("unguardable123124","admin");
        await browser.pause(4000);
        await homePage.clickOnProductLink();
        await homePage.logout();
        browser.pause(3000);
    })
})