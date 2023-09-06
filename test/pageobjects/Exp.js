class excel{
    async readDataFromExcel(sheetname,row,cell){
        const book=new excel.Workbook();
        await book.xlsx.readFile("./TestData.xlsx");
        const sheet=await book.getWorksheet(sheetname);
        let data=await sheet.getRow(row).getCell(cell).toString();
        return data;
    }
}
export default new excel()