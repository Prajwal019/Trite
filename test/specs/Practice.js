// describe('testrunner',()=>{
//     it('go to website',async()=>{
//         await browser.url("https://demo.actitime.com/login.do");
//        // const title=browser.getTitle();
//         await browser.maximizeWindow();
//         await $("#username").addValue("admin");
//         await $('[name="pwd"]').addValue("manager");
//         await $("#loginButton").click();
//           const title=browser.getTitle();
//           console.log(title);
//          console.log(browser.getUrl());
//          await browser.pause(6000);
    
//     }
//     )
// })

// describe('sample',()=>{
//     it('Amazon pantry',async()=>{
//         browser.url("https://www.amazon.in/");
//         browser.maximizeWindow();
//         //await $("#nav_cs_grocery").click();
//         //await $("//a[contains(text(),'Grocery')]").click();
//         await $("#twotabsearchtextbox").addValue("jim jam");
//         await $("#nav-search-submit-button").click();

//     })
// }
// )


// describe('myntra',()=>{
//     it('SoftToys',async()=>{
//         await browser.url("https://www.myntra.com/");
//         await browser.maximizeWindow();
//        const xpath="//a[@data-group='kids']";
//         await $(xpath).moveTo();
//         (await $("//a[text()='Soft Toys']")).click();
//         await browser.pause(4000);

//     })
// })



// describe('diasbled',()=>{
//     it('element',async()=>{
//         await browser.url("file:///C:/Users/ASUS/OneDrive/Desktop/Elements/DisabledElements.html");
//         await browser.maximizeWindow();
//         await (document.getElementById("d2").value='Hello');
//         await browser.pause(4000);
//     })
// })


// describe('alert',()=>{
//     it('alertpop',async()=>{
//         await browser.url("");
//         //await $("=.analystic").click();
//         //await browser.acceptAlert();
//         await browser.pause(4000);
//     })
// })

// describe('login',()=>{
//     it('actime',async()=>{
//         await browser.url("https://demo.actitime.com/");
//         await browser.maximizeWindow();
//         await $("#username").addValue("admin");
//         await $('[name="pwd"]').addValue("manager");
//         await $("#loginButton").click();
//         await $("#container_tasks").click();
//         await $("//div[text()='Add New']").click();
//         await $("//div[text()='+ New Customer']").click();
//         await $("//input[@class='inputFieldWithPlaceholder newNameField inputNameField']").addValue("w");
//         await $("//textarea[@placeholder='Enter Customer Description']").addValue("Why so serious!!!!!!!");
//         await $("//div[@class='emptySelection']").click();
//         await $("//div[@class='customerImportDivTitle']/parent::div/descendant::div[contains(text(),'Big')]").click();
//         await $("//div[contains(text(),'Create Customer')]").click();
//          let ti= $("//span[@class='manageScopeLabel visible']/ancestor::div[@class='taskManagementHeaderPanel hasSelectedCustomer']/div[2]/descendant::div[@class='title']").getText();
//         // let act="JJ";
//         console.log(ti);
//        // await expect(act).toHaveTitle(ti);
//         await $("#logoutLink").click();
//     })
// })

 describe('Youtube',()=>{
    it('hymn realme 5',async()=>{
        await browser.url("https://www.youtube.com/");
        await browser.maximizeWindow();
        await $("//input[@id='search']").click();
        await $("//input[@id='search']").addValue("hymn for the weekend");
        await $("#search-icon-legacy").click();
        await $("//yt-formatted-string[contains(text(),'Coldplay - Hymn For The Weekend (Official Video)')]").click();
        await browser.pause(4000);
    })
})

// describe('Pr',()=>{
//     it('hymn',async()=>{
//         await browser.url("http://rmgtestingserver/domain/Sales_And_Inventory_System/pages/login.php");
//         await browser.maximizeWindow();
//         await $("//input[@name='user']").add
//         await browser.pause(4000);
//     })
// })



