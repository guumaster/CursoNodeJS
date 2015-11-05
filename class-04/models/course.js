'use strict';

const mongoose = require('mongoose');
const Student = require('./student').Schema;

const CourseSchema = new mongoose.Schema({
  name: { type: String, required: true, default: 'Curso' },
  open: { type: Boolean, required: true, default: true },
  creationDate: { type: Date, required: true, default: Date.now },
  students: [{type: String }]
  //students: [Student]
},{versionKey: false, toObject: {virtuals: true}, toJSON: {virtuals: true}});

const CourseModel = mongoose.model('Course', CourseSchema);

module.exports = CourseModel;
