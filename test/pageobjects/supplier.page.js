class supplierPage{
    get addSupplierIcon(){
        return $("//i[@class='fas fa-fw fa-plus']");
    }
    get companyNameTextBx(){
        return $("//input[@name='companyname']");
    }
    get provinceDropDown(){
        return $("//input[@name='province']");
    }
    get cityDropDown(){
        return $("//input[@name='city']");
    }
    get phoneNumberTextBx(){
        return $("//h5[text()='Add Supplier']/ancestor::div[@class='modal-content']/descendant::input[@name='phonenumber']");
    }
    get saveBtn(){
        return $("//div[@class='modal fade show']//div/following-sibling::button[@class='btn btn-success']")
    }
    get resetBtn(){
        return $("//div[@class='modal fade show']//div/following-sibling::button[@class='btn btn-danger']")
    }
    get CancelBtn(){
        return $("//div[@class='modal fade show']//div/following-sibling::button[@class='btn btn-secondary']")
    }

    //Business Libraries

    async clickOnAddSupplierIcon(){
        await this.addSupplierIcon.click();
    }

    async addSupplierDetails(companyName,province,city,phoneNumber){
        await this.companyNameTextBx.setValue(companyName);
         await this.provinceDropDown.selectByVisibleText(province);
        await this.cityDropDown.selectByVisibleText(city);
        await this.phoneNumberTextBx.setValue(phoneNumber);
    }
    async clickOnSaveBtn(){
        await this.saveBtn.click();
    }
    async clickOnCancelBtn(){
        await this.CancelBtn.click();
    }
}
export default new supplierPage()