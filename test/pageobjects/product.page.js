class productPage{
    get addProductIcon(){
        return $("//i[@class='fas fa-fw fa-plus']");
    }
    get productCodeTextBx(){
        return $("//input[@name='prodcode']");
    }
    get nameTextBx(){
        return $("//input[@name='name']");
    }
    get descriptionTextBx(){
        return $( "//textarea[@name='description']");
    }
    get quantityTextBx(){
        return $("//input[@name='quantity']");
    }
    get onhandTextBx(){
        return $("//input[@name='onhand']");
    }
    get priceTextBx(){
        return $("//input[@name='price']");
    }
    get categoryDropDown(){
        return $("//h5[text()='Add Product']/ancestor::div[@class='modal-content']/descendant::select[@name='category']");
    }
    get supplierDropDown(){
        return $("//h5[text()='Add Product']/ancestor::div[@class='modal-content']/descendant::select[@name='supplier']");
    }
    get dateStockTextBx(){
        return $("//h5[text()='Add Product']/ancestor::div[@class='modal-content']/descendant::input[@name='datestock']");
    }
    get saveBtn(){
        return $("//input[@name='datestock']/../following-sibling::button[1]");
    }
    get resetBtn(){
        return $("//input[@name='datestock']/../following-sibling::button[2]");
    }
    get cancelBtn(){
        return $("//input[@name='datestock']/../following-sibling::button[3]");
    }

    async ClickOnAddProductIcon(){
       await this.ClickOnAddProductIcon;
    }
    async addProductDetails(productCode,name,description,quantity,onhand,price,category,supplier,date){
        await this.productCodeTextBx.setValue(productCode);
        await this.nameTextBx.setValue(name);
        await this.descriptionTextBx.setValue(description);
        await this.quantityTextBx.setValue(quantity);
        await this.onhandTextBx.setValue(onhand);
        await this.priceTextBx.setValue(price);
        await this.categoryDropDown.setValue(category);
        await this.supplierDropDown.setValue(supplier);
        await this.dateStockTextBx.setValue(date);
    }
    
    async clickOnSave(){
        await this.saveBtn.click();
    }
    async clickOnCancel(){
        await this.cancelBtn.click();
    }
}
export default new productPage()
