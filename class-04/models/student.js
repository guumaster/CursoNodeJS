'use strict';

const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
  name: String,
  lastName: { type: String, require: true }
});

const StudentModel = mongoose.model('Student', StudentSchema);

StudentSchema.virtual('fullName').get(function() {
  return `${this.name} ${this.lastName}`;
});

module.exports = StudentModel;
