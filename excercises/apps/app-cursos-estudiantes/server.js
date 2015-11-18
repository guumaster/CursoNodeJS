'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost:27017/coursesApp';

const errorHandler = require('./middlewares/errors');
const studentsRoutes = require('./routes/students');
const coursesRoutes = require('./routes/courses');
const app = express();

app.disable('x-powered-by');
app.use(bodyParser.json());

app.use('/students', studentsRoutes);
app.use('/courses', coursesRoutes);
app.use(errorHandler);

console.log('Conectando');
mongoose.connect(MONGO_URI, (err) => {
  if (err) {
    throw new Error('Can\'t connect to DB');
  }

  const server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port); //eslint-disable-line no-console
  });


});
