'use strict';

const courses = require('../managers/courses');

const getCourse = (req, res, next) => {

  if (!req.params.courseId) {
    return next();
  }

  courses.getCourse(req.params.courseId, function(err, course) {
          if (err) return next(err);

          if (!course) {
            return next(new Error('Course not found'));
          }

          req.course = course;

          return next();
  });

}
const checkOpenCourse = (req, res, next) => {

  if (!req.course) return next();

  if (!req.course.isOpen() ) {
    return next(new Error('Course is closed'));
  }

  return next();

};

module.exports = {
  getCourse,
  checkOpenCourse
};
