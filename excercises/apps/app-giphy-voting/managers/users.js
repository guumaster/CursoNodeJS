'use strict';

const User = require('../models/user');

function addUser(data, cb) {
  let username = data.username;
  let pass = data.pass;

  User.findOne({
    username
  }, function(err, found) {
    if (err) {
      return cb(err);
    }

    if (found) {
       return cb(new Error('User already exists'));
    }

    let user = new User({
      username: username,
      pass: pass
    });

    return user.save(cb);

/*
    return user.save(function(err, res) {
      if (err) return cb(err);

      return cb(null, res);
    });
    */

  });
}

function findById(username, cb) {
   User.findOne({
     username
   }, cb);
}

function authenticate(username, pass, cb) {
  User.findOne({
    username,
    pass
  }, function(err, found) {
     if (err || !found) {
       return cb(null, false);
     }

     return cb(null, true);
  });
}

module.exports = {
  addUser,
  findById,
  authenticate
};
