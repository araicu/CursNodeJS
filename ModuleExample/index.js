
console.log("module example started for you");

var myModule = require("./modules/mymodules.js");

myModule.start();

console.log("Config.conf1 = " + myModule.config.conf1);