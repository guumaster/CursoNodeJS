'use strict';

const errorHandler = function(err, req, res, next) {
  console.log(err);

  res
    .status(500)
    .send('Hay un error');
}

module.exports = errorHandler;
