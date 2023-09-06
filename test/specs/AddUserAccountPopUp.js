import loginPage from "../pageobjects/login.page.js"
import homePage from "../pageobjects/home.page.js"
import accountPage from "../pageobjects/account.page.js"
import { expect,assert } from "chai"

describe('verify popup',()=>{
    it('AddUserAccountPopUp',async()=>{
       await loginPage.openUrl();
        await loginPage.loginAsAdmin("unguardable","admin");
       await homePage.clickOnAccountsLink();
        await accountPage.toClickOnAddAccountIcon();
        const actual="Add User Account";
       //await browser.pause(4000);
    //    const exp=await $("//h5[text()='Add User Account']").getText();
    //    console.log(exp);
      // browser.execute("document.getElementById("exampleModalLabel").getAttribute("innerHTML")");
    })
})