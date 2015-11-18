'use strict';

module.exports = (err, req, res, next) => { //eslint-disable-line no-unused-vars
  console.log(err.stack); //eslint-disable-line no-console
  res.status(500).send(err.message || 'Something broke');
};
