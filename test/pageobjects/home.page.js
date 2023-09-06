class homePage{
     get customerLink(){
        return $("//span[text()='Customer']");
    }
    get employeeLink(){
        return $("//span[text()='Employee']");
    }
    get productLink(){
        return $("//span[text()='Product']");
    }
    get inventoryLink(){
        return $("//span[text()='Inventory']");
    }
    get transcationLink(){
        return $("//span[text()='Transaction']");
    }
    get supplierLink(){
        return $("//span[text()='Supplier']");
    }
    get AccountsLink(){
        return $("//span[text()='Accounts']");
    }
    get logoutimage(){
        return $("//img[@class='img-profile rounded-circle']");
    }
    get logoutBtn(){
        return $("//a[@data-target='#logoutModal']");
    }
    get logoutAlertpop(){
        return $("//div[@class='modal fade show']/descendant::a[text()='Logout']")
    }

    // business Libraries

    async clickOnCustomerLink(){
        await this.customerLink.click();
    }
    async clickOnEmployeeLink(){
        await this.employeeLink.click();
    }
    async clickOnProductLink(){
        await this.productLink.click();
    }
    async clickOnInventoryLink(){
        await this.inventoryLink.click();
    }
    async clickOnTranscationLink(){
        await this.transcationLink.click();
    }
    async clickOnSupplierLink(){
        await this.supplierLink.click();
    }
    async clickOnAccountsLink(){
        await this.AccountsLink.click();
    }
    async logout(){
        await this.logoutimage.click();
        await this.logoutBtn.click();
        await this.logoutAlertpop.click();
    }
}
export default new homePage()