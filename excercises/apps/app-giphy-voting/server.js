'use strict';

const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const addRoutes = require('./routes');
const addMiddleware = require('./middleware');
const errorHandler = require('./middleware/errors');

const MONGO_URL = 'mongodb://localhost:27017/gifapp';
let server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

addMiddleware(server);
addRoutes(server);
server.use(errorHandler);

const path = __dirname + ( process.argv[2] || '.');
const port = process.argv[3] || '3000';

console.log("Server path[" + path + "]...");

server.use(express.static(path));


mongoose.connect(MONGO_URL, function(err) {
  if (err) {
    throw new Error('Cant connect to MongoDb');
  }

  server.listen(port);
  console.log("Server listening on localhost:" + port + "...");

});
