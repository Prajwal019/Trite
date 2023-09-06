// describe('radio',()=>{
//     it('radio',async()=>{
//       await browser.url("file:///C:/Users/ASUS/OneDrive/Desktop/Elements/Radio.html");
//       const radio=$$("//input[@type='radio']");
//       await radio[2].click();
//       await browser.pause(5000);
//     })
// })

describe ('flipradio',()=>{
  it('radio',async()=>{
    await browser.url("https://www.flipkart.com/");
    await $("//button[@class='_2KpZ6l _2doB4z']").click();
    await $("//div[text()='Soft Toys']").click();
    const radio=$$("//div[contains(text(),'above')]");
    radio[1].click();
    browser.pause(6000);
    $("//input [@name='user']").add

  })
})

// describe('trite',()=>{
//   it('login',async()=>{
//     await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
//     await $("//input [@name='user']").add
//   })
// })