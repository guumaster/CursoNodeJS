'use strict';

const frequency = require('./frequency');
const sanitize = require('./sanitize');
const convert = require('./convert');
const leet = require('./leet');

const args = process.argv.slice(2);
const argsString = args.join(' ');
const cleanString = sanitize(argsString);

const titleParam = !!argsString.match(/-t/);
const freqParam = !!argsString.match(/--freq=([^\b]+)/);
const leetParam = !!argsString.match(/--leet/) || !!argsString.match(/-l/);

if (leetParam) {
  cleanString = leet(cleanString);
}

if (titleParam) {
  console.log('Title formatted: ');
  console.log( convert(cleanString) );
  process.exit();
}


if (freqParam) {
  console.log('Words frequency: ');
  console.log( frequency(argsString) );
  process.exit();
}
