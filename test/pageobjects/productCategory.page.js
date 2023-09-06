import { expect,assert } from "chai"

class productCategoryPage{
    get addBtn(){
        return $("//h6[text()='Fantech EG1']/following-sibling::input[@type='submit']");
    }
    get keyboardLink(){
        return $("//a[text()='Keyboard']")
    }
    get MouseLink(){
        return $("//a[text()='Mouse']")
    }
    get headsetLink(){
        return $("//a[text()='Headset']")
    }
    get cpuLink(){
        return $("//a[text()='CPU']")
    }
    get monitorLink(){
        return $("//a[text()='Monitor']")
    }
    get motherboardLink(){
        return $("//a[text()='Motherboard']")
    }
    get processorLink(){
        return $("//a[text()='Processor']")
    }
    get powerSupplyLink(){
        return $( "//a[contains(text(),'Power')]")
    }
    get othersLink(){
        return $( "//a[text()='Others']")
    }
    get AddcustomerLookUpicon(){
    return $("//a[@class='btn btn-primary bg-gradient-primary']");
    }
    get firstNameTextBx(){
        return $("//div[@class='modal fade show']//div[1]/descendant::input[@placeholder='First Name']")
    }
    get lastNameTextBx(){
        return $("//div[@class='modal fade show']//div[1]/descendant::input[@placeholder='Last Name']")
    }
    get phoneNumTextBx(){
        return $("//div[@class='modal fade show']//div[1]/descendant::input[@placeholder='Phone Number']")
    }
    get saveBtn(){
        return $("//div[@class='modal fade show']//div[1]/descendant::button[@type='submit']")
    }
    get resetBtn(){
        return $("//div[@class='modal fade show']//div[1]/descendant::button[@type='reset']")
    }
    get cancelBtn(){
        return $("//div[@class='modal fade show']//div[1]/descendant::button[text()='Cancel']")
    }
    get deleteBtn(){
        return $("//i[@class='fas fa-fw fa-trash']")
    }
    

    //Buisness Libraries

    async clickOnAddCustomerIcon(){
        await this.AddcustomerLookUpicon.click();
    }
    async addCustomerDetails(firstname,lastname,phonenumber){
        await this.firstNameTextBx.setValue(firstname);
        await this.lastNameTextBx.setValue(lastname);
        await this.phoneNumTextBx.setValue(phonenumber);
    }
    async clickOnSaveButton(){
        await this.saveBtn.click();
    }
    async clickOnCancelBtm(){
        await this.cancelBtn.click();
    }
    async clickOnDeleteBtn(){
        await this.deleteBtn.click();
    }
    async clickOnKeyboardLink(){
        await this.keyboardLink.click();
    }
    async clickOnMouseLink(){
        await this.MouseLink.click();
    }
    async clickOnHeadsetLink(){
        await this.headsetLink.click();
    }
    async clickOnCpuLink(){
        await this.cpuLink.click();
    }
    async clickOnMonitorLink(){
        await this.monitorLink.click();
    }
    async clickOnMotherboardLink(){
        await this.motherboardLink.click();
    }
    async clickOnProcessorLink(){
        await this.processorLink.click();
    }
    async clickOnPowerSupplyLink(){
        await this.powerSupplyLink.click();
    }
    async clickOnOthersLink(){
        await this.othersLink.click();
    }
    async requiredQuantity(ProdName,quantity){
        await $("//h6[text()='"+ProdName+"']/ancestor::div[@class='products']/descendant::input[@name='quantity']").setValue(quantity);
        //h6[text()='Fantech EG1']/ancestor::div[@class='products']/descendant::input[@name='quantity']
        await $("//h6[text()='"+ProdName+"']/ancestor::div[@class='products']/descendant::input[@name='addpos']").click();
    }
    async toClickOnAdd(){
        await $("//h6[text()='Fantech EG1']/following-sibling::input[@type='submit']").click();
    }
    async toVerifyProductAndQuantity(ActualProduct,ActaulQuantity){
        const Expproduct=await $("//tbody/tr/td[1]").getText();
        const Expquants=await $("//tbody/tr/td[2]").getText();
        console.log(Expproduct+":"+ExpquantsExpquants);
        //assert.equal(Expproduct,ActualProduct)
    }
 }
export default new productCategoryPage()