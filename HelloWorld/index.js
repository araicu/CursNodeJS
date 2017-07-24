/* Hello World! program in Node.js */
"use strict";

//required module
var mHttp = require("http");

//variables
var iPort = 8081;
var sMessage = "Message";

var oResponse = {
    "returnCode" : "1",
    "returnMessage" : "Everithing OK",
    "returnData" : null
}
//create Http Server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request Received");

    res.writeHead(200, {'Content-Type': 'application/json'});
    res.write(JSON.stringify(oResponse));
    res.end();

    console.log("Response Send");
} );
oServer.listen(iPort)

// Console will print the message
console.log('Server running at http://127.0.0.1:' + iPort + '/');