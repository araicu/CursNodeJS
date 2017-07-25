console.log("unit starts");

var myValidator = require("./modules/passwordValidator.js");

var password = "testBauBau2018";
var valid = myValidator.validPassword(password);

console.log("Your password ' " + password + "' is : " + valid);