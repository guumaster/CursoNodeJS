'use strict';

const users = require('./users');
const images = require('./images');
const votes = require('./votes');

module.exports = function(server) {
  server.use('/user', users);

   server.use('/images', images);
//  app.use('/votes', votes);
};
