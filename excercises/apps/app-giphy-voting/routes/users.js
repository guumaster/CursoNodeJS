'use strict';

const express = require('express');
const routes = express.Router();

const Users = require('../managers/users');

routes.get('/', function(req, res, next) {

   res.send({});
});

routes.post('/login', function(req, res, next) {
   let username = req.body.username;
   let pass = req.body.pass;

   Users.authenticate(username, pass, function(err, isValid) {
     if (err) return next(err);

     if (!isValid) {
        return res.status(401).send('Username or password invalid');
     }

     res.send({
       success: true
     });

   });

});

routes.post('/register', function(req, res, next){
  let username = req.body.username;
  let pass = req.body.pass;
  let data = {
    username,
    pass
  };
  Users.addUser(data, function(err, user) {
    if(err){
        if(err.message.match(/Already exists/i)) {
          return res.status(409).send(err);
        }
        return next(err);
    }
    return res.send({success: true, id: user._id });
  });
});

routes.get('/list', function(req, res, next) {


   res.send({});
});


module.exports = routes;
