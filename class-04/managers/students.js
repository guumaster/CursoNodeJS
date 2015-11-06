'use strict';

const Student = require ('../models/student');

const listAll = (cb) => {
  return Student.find({}, cb);
};

const listOpen = (cb) =>{
  return Student.find({open : true}, cb);
};

const getStudent = (id, cb) =>{
  return Student.findById(id, cb);
};

const create = (data, cb)=>{
  let student = new Student(data);
  return student.save(cb);
};

module.exports = {
  listAll,
  listOpen,
  getStudent,
  create
};
