

var express = require('express');
var app = express();
 
app.get('/Hello/', function (req, res) {
  res.send('Hello World !!');
});
 
app.post('/', function (req, res) {
  res.send('No Post methoo available');
});

app.listen(3000);

console.log('Server running at http://127.0.0.1:' + 3000 + '/');