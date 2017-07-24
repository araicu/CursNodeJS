/* Hello World! program in Node.js */
"use strict";

//required module
var mHttp = require("http");

//variables
var iPort = 8081;
var sMessage = "Message";
//create Http Server
var oServer = mHttp.createServer(function(req, res){
    console.log("Request Received");

    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write(sMessage);
    res.end();

    console.log("Response Send");
} );
oServer.listen(iPort)

// Console will print the message
console.log('Server running at http://127.0.0.1:' + iPort + '/');