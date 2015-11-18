'use strict';

const express = require('express');
const router = express.Router();

const freq = require('../mods/frequency');
const sanitize = require('../middlewares/sanitize');

const user = modu...

fs.readFileSync

router.get('/test', function(req, res) {

});


router.post('/', sanitize, (req, res, next) => {

   let param = req....;
   let foundUser = null;

   users.find(xxx, function(err, user) {

       return res.send(user);

   });


  console.log('find lanzado', foundUser);

  if (!req.body || !req.body.input) {
    return next(new Error('Missing input'));
  }

  console.log('input', req.body.input);
  let resultado = freq(req.body.input);

  res.send(resultado);

});

module.exports = router;
