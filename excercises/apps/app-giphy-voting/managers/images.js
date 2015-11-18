'use strict';

const request = require('request');
const Gifs = require('../models/gifs');

const GIPHY_SEARCH_URL = 'http://api.giphy.com/v1/gifs/search?q={{TERM}}&api_key=dc6zaTOxFJmzC';

function searchGif(term, cb) {
   if (!term) {
     return cb(new Error('Empty term'));
   }

   let search_url = GIPHY_SEARCH_URL.replace('{{TERM}}', term);

   request({
     uri: search_url,
     json: true
   }, function (err, response, body) {
      if (err) return cb(err);

      if (!response.statusCode === 200) {
        return cb(err);
      }

      if (!body.data || !body.data.length ) {
        return cb(new Error('No image found'));
      }

      return cb(null, body.data[0]);
   });

}

function addGif(term, cb) {

  searchGif(term, function(err, gifData) {
    if (err) return cb(err);

    let newGif = new Gifs({
      term,
      url: gifData.images.fixed_width.url
    });

    return newGif.save(cb);
  });
}

function getGif(term, cb) {
  return Gifs.findOne({ term }, cb);
}

function voteGif(id, username, cb) {
  Gifs.findById(id, function(err, gif) {
    if (err) return cb(err);

    return Gifs.update({ $inc: { totalVotes: 1}, $push: { voters: [username]} },  cb);
  });
}

function listGifs(cb) {
  return Gifs.find({}, cb);
}

module.exports = {
  addGif,
  voteGif,
  getGif,
  listGifs
};
