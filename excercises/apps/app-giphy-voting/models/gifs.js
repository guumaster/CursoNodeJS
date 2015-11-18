'use strict';

const mongoose = require('mongoose');

const GifSchema = new mongoose.Schema({
  term: String,
  url: String,
  totalVotes: { type: Number, default: 0 },
  voters: [{ username: String }],
  creationDate: { type: Date, default: Date.now }
});



module.exports = mongoose.model('Gif', GifSchema);
