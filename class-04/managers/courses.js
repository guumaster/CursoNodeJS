'use strict';

const Course = require('../models/course');

const listAll = (cb) => {

  return Course.find({}, function(err, res) {
    console.log('find', err, res);
    cb(err, res);
  });
};

const listOpen = (cb) => {
  return Course.find({ open: true }, cb);
};

const getCourse = (id, cb) => {
  return Course.findById(id, cb);
}

const create = (data, cb) => {
  let course = new Course(data);
  return course.save(cb);
};

const close = (id, cb) => {
  return Course.findByIdAndUpdate(id, { $set: { open: false} }, function(err, res) {
    console.log('res', err, res);
    cb(err, res);
  });
};

module.exports = {
  listAll,
  listOpen,
  getCourse,
  create,
  close
};
