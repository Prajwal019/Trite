class customerPage{
    get addCustomerIcon(){
        return $("//i[@class='fas fa-fw fa-plus']");
    }
    get firstname(){
        return $("//div[@class='modal fade show']/descendant::input[@name='firstname']");
    }
    get lastname(){
        return $("//div[@class='modal fade show']/descendant::input[@name='lastname']");
    }
    get phonenumber(){
        return $("//div[@class='modal fade show']/descendant::input[@name='phonenumber']");
    }
    get saveBtn(){
        return $("//div[@class='modal fade show']/descendant::button[@type='submit']");
    }
    get resetBtn(){
        return $("//div[@class='modal fade show']/descendant::button[@type='reset']");
    }
    get cancelBtn(){
        return $("//div[@class='modal fade show']/descendant::button[text()='Cancel']");
    }

    async clickOnAddCustomerIcon(){
        await this.addCustomerIcon.click();
    }
    async addCustomerDetails(firstname,lastname,phonenumber){
        await this.firstname.setValue(firstname);
        await this.lastname.setValue(lastname);
        await this.phonenumber.setValue(phonenumber);

    }
    async clickOnSave(){
        await this.saveBtn.click();
    }
}
export default new customerPage()