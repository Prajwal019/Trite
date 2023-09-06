// import { $ } from '@wdio/globals'
// import Page from './page.js';

// /**
//  * sub page containing specific selectors and methods for a specific page
//  */
// class LoginPage extends Page {
//     /**
//      * define selectors using getter methods
//      */
//     get inputUsername () {
//         return $('#username');
//     }

//     get inputPassword () {
//         return $('#password');
//     }

//     get btnSubmit () {
//         return $('button[type="submit"]');
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await this.inputUsername.setValue(username);
//         await this.inputPassword.setValue(password);
//         await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// export default new LoginPage();


class loginPage{

    openUrl(){
        return browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
        
    }
    get Username(){
        return $("//input[@name='user']");
    }
    get Password(){
        return $("//input[@name='password']");
    }
    get LoginBtn(){
        return $("//button[@name='btnlogin']");
    }
    //Business Libraries

    async loginAsAdmin(username,password){
        await browser.maximizeWindow();
        await this.Username.addValue(username);
        await this.Password.addValue(password);
        await this.LoginBtn.click();
        await browser.acceptAlert();
    }
    async loginAsUser(username1,password2){
        await browser.maximizeWindow();
        await this.Username.addValue(username1);
        await this.Password.addValue(password2);
        await this.LoginBtn.click();
        await browser.acceptAlert();
    }
}
export default new loginPage()