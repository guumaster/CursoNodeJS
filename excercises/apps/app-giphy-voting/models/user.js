'use strict';

const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  pass: { type: String, required: true },
  creationDate: { type: Date, default: Date.now }
});

UserSchema.pre('save', function(done) {
   // No "Mister" accepted
   if (this.username === 'Mister')  {
     return done(new Error('Invalid name'));
   }

   done();
});

UserSchema.virtual('nameFormatted').get(function()  {
  return this.username.toUpperCase();
});

module.exports = mongoose.model('User', UserSchema);
