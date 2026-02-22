function doPost(e) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
  const data = e.parameter; // {name: "...", email: "..."}
  sheet.appendRow([new Date(), data.name, data.email]);
  return ContentService.createTextOutput("Success");
}