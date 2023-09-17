//Check back over this - LM 9/16/23

//Referenced "https://stackoverflow.com/questions/6002254/get-the-current-year-in-javascript"
// Return current date and time
var currentTime = new Date()

var month = currentTime.getMonth() + 1

var day = currentTime.getDate()

var year = currentTime.getFullYear()

// write output MM/dd/yyyy
// document.write(month + "/" + day + "/" + year)

let oLastModif = new Date(document.lastModified);