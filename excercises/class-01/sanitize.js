'use strict';

let sanitize = (str) =>  str.replace(/[^a-z0-9 ]+/gim, '');

module.exports = sanitize;
