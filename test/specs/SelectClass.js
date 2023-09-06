describe('dropdowntest',()=>{
it('drop',async()=>{
    await browser.url("file:///C:/Users/ASUS/OneDrive/Desktop/Elements/FoodMenu.html")
    const selectbox=await $("#mtr");
    await selectbox.selectByVisibleText("dosa");
    console.log(await selectbox.getText('option:checked'));
    await browser.pause(5000);
})
})