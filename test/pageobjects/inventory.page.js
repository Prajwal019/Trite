class inventoryPage{
    get searchTextbx(){
        return $("//input[@type='search']");
    }
    get nextBtn(){
        return $("//a[contains(text(),'Next ')]");
    }

    //Business Libraries
    async searchTransaction(prodnum){
        await this.searchTextbx.setValue(prodnum)
    }
    async clickOnNextBtn(){
        await this.nextBtn.setValue(prodnum)
    }
}
export default new inventoryPage()