'use strict';

let convert = (str) => {
  return str
    .trim()
    .split(/ +/)
    .reduce((acc, word) => {
      return (acc + ' ' + word[0].toUpperCase() +  word.slice(1).toLowerCase()).trim();
  }, '');
}

module.exports = convert;
