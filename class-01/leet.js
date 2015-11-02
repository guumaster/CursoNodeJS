'use strict';

function l33t(input) {
  return input
    .replace(/a/igm, "4")
    .replace(/e/igm, "3")
    .replace(/t/igm, "7")
    .replace(/s/igm, "5");
}

module.exports = l33t;
