function paySlipSender(){
  var spreadsheet = SpreadsheetApp.getActive();
  var sheet = spreadsheet.getSheetByName("List");
  var dataRange = sheet.getRange("A2:D5").getValues();

  for(var i=0; i< dataRange.length; i++){
    var dataRow = dataRange[i];
    var email = dataRow[2];
    var msg =buildMessage(dataRow[1],dataRow[3]);
    MailApp.sendEmail( email, "Payslip", msg);
  }
  // Logger.log(dataRange);
}

function buildMessage(fullName, salary){
var message = `Hi ${fullName},

Your salary for the month of May has been deposited.

Your Salary:${salary}
Thanks`;
return message; 
}