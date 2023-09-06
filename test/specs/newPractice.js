
//import { assert,expect } from "chai";

//  describe('sample',()=>{
//     it('trid',async()=>{
//         await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
//         await $("//input[@name='user']").addValue("unguardable");
//         await $("//input[@name='password']").addValue("admin");
//         await $("//button[@name='btnlogin']").click();
//         await browser.pause(3000);
//         await browser.acceptAlert();
//         await $("//img[@class='img-profile rounded-circle']").click();
//         await $("//a[@data-target='#logoutModal']").click();
//         await $("//div[@class='modal fade show']/descendant::a[text()='Logout']").click();
//         await browser.pause(4000);
//     })

    // it('trid',async()=>{
    //     await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
    //     await $("//input[@name='user']").addValue("unguardable");
    //     await $("//input[@name='password']").addValue("admin");
    //     await $("//button[@name='btnlogin']").click();
    //     //await browser.pause(3000);
    //     await browser.acceptAlert();
    //     await $("//span[text()='Customer']").click();
    //     await $("//a[@data-target='#customerModal']").click();
        
    // })

    // it('file upload',async()=>{
    //     await browser.url("https://ps.uci.edu/~franklin/doc/file_upload.html");
    //     const filepath='./FrameworkExplanation.pdf';
    //     const remotefilepath=await browser.uploadFile(filepath);
    //     await $("//input[@name='userfile']").setValue(remotefilepath);
    //     await $("//input[@type='submit']").click();
    //     await browser.pause(5000);

    // })

    // it('scrollBy',async()=>{
    //     await browser.url("https://www.bbc.com/");
    //     //await browser.scroll(0,3000);
    //     const target= await $("//span[text()='Future Planet']");
    //     await target.scrollIntoView();
    //     await browser.pause(4000);

    // })


    // it('childwindow',async()=>{
    //     await browser.url("https://secure.indeed.com/");
    //     await $("#login-google-button").click();
    //     await $("#apple-signin-button").click();
    //     await browser.pause(4000);
    //     var windowhandles=await browser.getWindowHandles();
    //     await browser.switchToWindow(windowhandles[1]);
    //     const g= browser.getTitle();
    //     console.log(g);
    //     browser.closeWindow();
    //     browser.pause(6000);
    //     await browser.switchToWindow(windowhandles[2]);
    //     const h= browser.getTitle();
    //     console.log(h);
    //     await browser.pause(5000);
    // })

    // it('authentication',async()=>{
    //     await browser.url("https:admin:admin @//the-internet.herokuapp.com/");
    //     await browser.pause(4000);
    // })

    // it('alert',async()=>{
    //     await browser.url("https://demo.automationtesting.in/Alerts.html");
    //     await $("//button[contains(text(),'click the button to display an  alert')]").click();
    //     const h=browser.getAlertText();
    //     console.log(h);
    //     $("//button[contains(text(),'click the button to display an  alert')]").click();
    //     browser.sendAlertText("Why so serious.......!!!!!!");
    //     browser.acceptAlert();
    //     browser.pause(3000);
    // })

    // it('alert',async()=>{
    //     await browser.url("https://nxtgenaiacademy.com/alertandpopup/");
    //     await $("//button[@name='alertbox']").click();
    //     browser.pause(3000);
    //      const text=browser.getAlertText();
    //      console.log(text);
    //      browser.sendAlertText("Prajwal");
    //      browser.pause(4000);


    // })

    // it('mousehover',async()=>{
    //     browser.url("https://www.myntra.com/");
    //     const element=await $("//a[@data-group='kids']");
    //    await element.moveTo();
    //    // browser.pause(4000);
    //    browser.debug(4000);
    // })

// it('dragAndDrop',async()=>{
//     browser.url("http://www.dhtmlgoodies.com/submitted-scripts/i-google-like-drag-drop/index.html");
//    const element =await $("//h1[text()='Block 1']");
//     const target=await $("//h1[text()='Block 4']");
//    await element.dragAndDrop(target);
//   await browser.pause(4000);
// })

// it('doubleclick',async()=>{
//     browser.url("http://www.mouseprogram.com/");
//     const element=$("//img[@name='A']");
//     element.doubleClick(element);
//     browser.pause(4000);
// })
// it('screenshot',async()=>{
//     browser.url("https://www.myntra.com/");
//     browser.pause(3000);
//     await browser.saveScreenshot("./ss.png")
// })


// it('screenshot element',async()=>{
//    await browser.url("https://www.google.com/");
//    browser.pause(4000)
//    const element=await $("//img[@class='lnXdpd']");
//    await element.saveScreenshot("./prajwal.png")
// })

// it('findelements',async()=>{
//     await browser.url("https://www.amazon.in/");
//     await $("#twotabsearchtextbox").click();
//     await $("#twotabsearchtextbox").addValue("iphone 14");
//     await $("//input [@id='nav-search-submit-button']").click();
//     const iphone=await $$("//span[contains(text(),'Apple iPhone 14')]");
//     const prices=await$$("//span[contains(text(),'Apple iPhone 14')]/ancestor::div[@class='a-section a-spacing-small a-spacing-top-small']/descendant::span[@class='a-price-whole']");
//    let values=  iphone.forEach((elem) => {
//    return elem.getText();
// })
// console.log(values);
// })

// it('wait-isclickable',async()=>{
//     //await browser.url("https://www.facebook.com/");
//     //const button=await  $("//button[@name='login']");
//    await browser.url("file:///C:/Users/ASUS/OneDrive/Desktop/Elements/DisabledElements.html")
//    const button=$("//input [@value='Login']");
//    const result= await button.isClickable();
//    console.log(result);
// })

// it('wait-isdisplayed',async()=>{
//    await browser.url("https://www.facebook.com/");
//     const text=await $("//h2[contains(text(),'Facebook helps')]")
//     const g=await text.isDisplayed();
//     if (g==true) {
//         console.log("The statement is displayed");
//     }
// })

// it('wait-isenabled',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     // const enab=await $("//button[@id='but2']");
//     // const e=await enab.isEnabled();
//     // if(e==true){
//     //     console.log("Button is enabled");
//     // }

//     const enab=await $("//textarea[@id='ta1']");
//     const e=await enab.isEnabled();
//     if(e==true){
//         console.log("Text area is enabled");
//     }
// })

// it('wait-isSelected',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     // const selected =await $("#checkbox1");
//     // const g=await selected.isSelected();
//     // if(g==true){
//     //             console.log("Check box is selected");
//     //         }

//     const selected=await $("#checkbox2");
//     const g=await selected.isSelected();
//     if(g==true){
//         console.log("Check box is selected");
//     }
//     else 
//     console.log("Check box is not selected");
// })

// it('wait-isExisting',async()=>{
//    await browser.url("http://omayo.blogspot.com/");
//     const button=await $("//button[text()='Dropdown']");
//     const g=await button.isExisting();
//     if (g==true) {
//         console.log("existing");
//     }
// })


// it('waitforClickable',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     await $("//button[text()='Check this']").click();
//     const g=await $("#dte").waitForClickable({timeout:11000});
//     if (g==true) {
//         console.log("element is clickable");
//     } 
// })



// it('waitforDisabled',async()=>{
//     await browser.url("http://omayo.blogspot.0000com/");
//     await $("//button[text()='My Button']").click();
//     browser.pause(4000);
//     const r=await browser.getAlertText();
//     console.log(r);
    
// })

// it('waituntill',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     await $("#timerButton").scrollIntoView();
//     await $("//button[text()='Check this']").click();
//     browser.waitUntil(async()=>{
//         const element=await $("#dte");
//         const Check=await element.isEnabled();
//         console.log("element enabled=======>"+Check);
//         return Check;
//     },{timeout:11000})
// })


// it('Assertion-to have url',async()=>{
//    await browser.url("http://omayo.blogspot.com/");
//    await expect(browser).toHaveUrl("http://omayo.blogspot");
// })

// it('Assert-"To have text',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     const exp=await $("//p[text()='Please try again in 30 seconds.']").getText();
//     const text="Please";
//     expect(exp).toHaveText(text);
   

// })

// it('scroll',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     await browser.maximizeWindow();
//     await $("//button[text()='Submit']").scrollIntoView();
//     await browser.pause(4000);
//     await $("//button[text()='Submit']").click();

// })
// it('Flip',async()=>{
//    await browser.url("https://www.flipkart.com/");
//    await browser.maximizeWindow();
//    await $("//input[@name='q']").click();
//    await $("//input[@name='q']").addValue("iphone 14");
// //    await $("//button[@class='L0Z3Pu']").click();
//     await browser.keys('Enter');
//    await $("//div[text()='Offers']").scrollIntoView();
//     await browser.pause(4000);
// })

// it('robot',async()=>{
//    await browser.url("http://omayo.blogspot.com/");
//   await browser.keys([Key.Ctrl,'p']);
//  await browser.pause(5000);
// })

// it('pagesource',async()=>{
//    await browser.url("https://www.flipkart.com/");
//    console.log(browser.getPageSource());
// })

// it('frame',async()=>{
//     await browser.url("file:///C:/Users/ASUS/OneDrive/Desktop/Elements/Page1.html");
//    await  browser.switchToFrame([1]);
//    await  $("#t3").addValue("Hi");
//     await browser.pause(6000);
// })

// it('assertion-title',async()=>{
//     await browser.url("http://omayo.blogspot.com/");
//     const r=await $("//h2[contains(text(),'element having')]");
//     await expect(r).toHaveTextContaining("element");
// })


// it('toHaveValue',async()=>{
//    await browser.url("http://omayo.blogspot.com/");
//   const elem=await $("//button[text()='Submit']");
//   const ele=await $("//input[@id='alert2']");
//   await elem.scrollIntoView();
//   await expect(ele).toBeDisplayedInViewport();
//   await browser.pause(4000);
// })


//  it('Chai',async()=>{
//     const g='Vivo';
//     assert.typeOf(g,'String',"Hello");
//  })
// })

 async function a() {
   setTimeout(async ()=>{
        console.log("A");
    },3000)
   
}
 async function b() {
     setTimeout(async ()=>{
        console.log("B");
    },2000)
}
 async function c() {
    await setTimeout(async()=>{
        console.log("C");
    },1000)
}
a()
b()
c()