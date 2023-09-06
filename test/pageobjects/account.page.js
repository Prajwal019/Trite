class accountPage{
    get addAccountIcon(){
        return $("//a[@data-target='#supplierModal']");
    }
    //Business Libraries

    async toClickOnAddAccountIcon(){
        await this.addAccountIcon.click();
    }
}
export default new accountPage()