import excel from 'exceljs'

describe('Excel',()=>{
    it('readFromExcel',async()=>{
        const book=new excel.Workbook();
        await book.xlsx.readFile();
        const sheet=await book.getWorksheet('Sheet1');
        let data=await sheet.getRow(1).getCell(1).toString();
        
    })
})