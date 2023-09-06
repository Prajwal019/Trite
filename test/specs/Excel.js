import excel from 'exceljs'
// fetch data:

describe('Excel',()=>{
    // it('Read data',async()=>{
    //     const book=new excel.Workbook()
    //     await book.xlsx.readFile("C:/Users/ASUS/OneDrive/Desktop/Trite/data.xlsx");
    //     const sheet=await book.getWorksheet('Sheet1');
    //     let data=await sheet.getRow(1).getCell(1).toString();
    //     let data1=await sheet.getRow(2).getCell(1).toString();
    //     console.log(data);
    //     console.log(data1);
    // })

//     it('Read data',async()=>{
//         let book=new excel.Workbook();
//         await book.xlsx.readFile("./data.xlsx");
       
//         let sheet=await book.getWorksheet('Bikes');
//         let count=sheet.rowCount;
//          console.log(count);
//         for(let i=1;i<=count;i++){
//             let data=await sheet.getRow(i).getCell(1).toString();
//             console.log(data);
//         }
//     })

//Write Data:
    // it('WriteData',async()=>{
    //     const book=new excel.Workbook();
    //     await book.xlsx.readFile("./data.xlsx");
    //     const sheet=await book.getWorksheet('Bikes');
    //      sheet.getRow(1).getCell(1).value="Xpulse";
    //      await book.xlsx.writeFile("./data.xlsx");
    // })

    // to create new excelfile
//     it('createExcel',async()=>{
//         const book=new excel.Workbook();
//         const sheet=await book.addWorksheet("Laptops");
//         sheet.addRow(1).getCell(1).value="AsusTuffRog";
//         await book.xlsx.writeFile("./data.xlsx");
//     })

    //Appending Random Number

    // it('Name',async()=>{
    //     const book=new excel.Workbook();
    //     await book.xlsx.readFile("./data.xlsx");
    //     let sheet=book.getWorksheet("Names");
    //     for(let a=1;a<=10;a++){
    //         let num=Math.floor((Math.random()*1000)+1);
    //         sheet.addRow(a).getCell(2).value='air'+num;
    //     }
    //     await book.xlsx.writeFile("./data.xlsx");

    // })

    //fetching data and appending random number
    // it('name',async()=>{
    //     const book=new excel.Workbook();
    //     await book.xlsx.readFile("./data.xlsx");
    //     let sheet=book.getWorksheet("Names");
    //     let name=sheet.getRow(1).getCell(1).toString();
    //     let num=Math.floor((Math.random()*1000)+1);
    //     name=name+num;
    //     console.log(name);
    // })
})
 