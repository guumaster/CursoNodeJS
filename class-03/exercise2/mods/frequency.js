 'use strict';

const sanitize = require('./sanitize');

let freq = (str) => {
  let words = sanitize(str).split(/ +/);

  return words.reduce((res, word) => {
    res[word] = res[word] || 0;
    res[word] += 1;
    return res;
  }, {});
}

module.exports = freq;
