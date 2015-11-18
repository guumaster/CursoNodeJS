'use strict';

const express = require('express');
const images = require('../managers/images');
const request = require('request');

const routes = express.Router();

routes.post('/add', function(req, res, next) {
  let term = req.body.term;

  images.addGif(term, function(err, gif) {
     if (err) return next(err);

    res.send(gif);
  });
});

routes.get('/list', function(req, res, next) {
  let term = req.body.term;

  images.listGifs(function(err, list) {
     if (err) return next(err);

    res.send(list);
  });
});

routes.get('/:term/gif', function(req, res, next) {
  let term = req.params.term;

  images.getGif(term, function(err, gifData) {
     if (err) return next(err);

    res.send(`<img src="${gifData.images.fixed_width.url}" />`)
      //res.redirect(gifData.images.fixed_width.url);

      //request(gifData.images.fixed_width.url).pipe(res);

  });

});

module.exports = routes;
