'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const freqRoutes = require('./routes/frequency');
const errorHandler = require('./middlewares/errors');
const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());

app.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

app.use('/freq', freqRoutes);
app.use(errorHandler);

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
