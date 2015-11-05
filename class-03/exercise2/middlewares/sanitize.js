'use strict';
const sanitize = require('../mods/sanitize');

module.exports = (req, res, next) => {
   if (!req.body || !req.body.input) return next();

   req.body.input = sanitize(req.body.input);
   return next();

};
