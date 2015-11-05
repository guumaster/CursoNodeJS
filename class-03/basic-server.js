'use strict';

var express = require('express');
var app = express();

/// bunyan

app.disable('x-powered-by');

app.use(function (req, res, next) {
  req.inicio = Date.now();

  console.log('Time:', Date.now());
  next();
});



app.get('/', function (req, res) {

  console.log( Date.now() - req.inicio);

  res.send('Hello World!');
});

app.get('/:name', function (req, res) {
  // req.params;
  // req.query; ?q=XX
  // req.body; { }

  let name = req.params.name;

  res.send('Hello ' + name);
});


var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
