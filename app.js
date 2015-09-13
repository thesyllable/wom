var express = require('express');
var app = express();



app.get('/', function (req, res) {
  res.sendFile('index.html',{ root : __dirname});
});

var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('WOM is listening at http://%s:%s', host, port);
});