'use strict';


var express = require('express');
var app = express();


app.get('/', function (req, res) {
  res.sendFile('about.html',{ root : __dirname});
});

app.get('/js/reactapp.js', function (req, res) {
  res.sendFile('reactapp.js',{ root : __dirname});
});


var server = app.listen(process.env.PORT, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('WOM is listening at http://%s:%s', host, port);
});