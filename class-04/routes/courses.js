'use strict';

const express = require('express');
const routes = express.Router();
const courses = require('../managers/courses');
const getCourse = require('../middlewares/courses').getCourse;
const checkOpenCourse = require('../middlewares/courses').checkOpenCourse;

//  server.com/courses/
routes.get('/', (req, res, next) => {
   // list all courses
   courses.listAll((err, list) => {
     if (err) return next(err);

     res.status(200).json(list);
   });
});

routes.post('/', (req, res, next) => {
   // create a new course

   courses.create(req.body, function(err, course) {
     if(err) return next(err);

     res.send(course);
   });

});

routes.get('/open', (req, res, next) => {
   // list all open courses
   courses.listOpen((err, list) => {
     if (err) return next(err);

     res.send(list);
   });
});

routes.get('/:courseId', getCourse, (req, res) => {
     res.send(req.course);
});

routes.post('/:courseId/close', getCourse, checkOpenCourse, (req, res, next) => {
   courses.close(req.course.id, (err) => {
     if (err) return next(err);

     res.status(204).send();
   });
});

routes.post('/:courseId/enroll', getCourse, checkOpenCourse, (req, res, next) => {

  let studentId = req.body.studentId;
console.log('enroll students', studentId);
   courses.enrollStudent(req.course.id, studentId, (err) => {
     if (err) return next(err);

     res.status(204).send();
   });
});


module.exports = routes;
