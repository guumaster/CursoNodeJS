'use strict';

const express = require('express');
const routes = express.Router();
const students = require('../managers/students');

routes.get('/', (req, res, next) => {
  //list all students
  students.listAll((err, list) => {
  if (err) return next(err);
    res.status(200).json(list);
  });
});

routes.post('/', (req, res, next) => {
  //create a new student
  students.create(req.body, function(err, student){
  if (err) return next(err);
    res.send(student);
  })

});

routes.get('/:studentId', (req, res, next) => {
  //list a  student
  let id = req.params.studentId;

  students.getStudent(id, (err, list) => {
  if (err) return next(err);
    res.status(200).json(list);
  });
});


module.exports = routes;
