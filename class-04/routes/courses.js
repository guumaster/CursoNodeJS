'use strict';

const express = require('express');
const routes = express.Router();
const courses = require('../managers/courses');

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

routes.get('/:courseId', (req, res, next) => {
   // list one course
   let id = req.params.courseId;

   courses.get(id, (err, course) => {
     if (err) return next(err);

     res.send(course);
   });
});

routes.post('/:courseId/close', (req, res, next) => {
   // list one course
   let id = req.params.courseId;

   courses.close(id, (err) => {
     if (err) return next(err);

     res.status(204).send();
   });
});



module.exports = routes;
