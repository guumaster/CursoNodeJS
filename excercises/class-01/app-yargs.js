'use strict';
let convert = require('./convert');
let freq = require('./frequency');

let MY_ARGS = require('yargs')
    .alias('f', 'frequency')
    .alias('p', 'print')
    .argv;

console.log(MY_ARGS);
let  input = MY_ARGS._.join(' ') || 'EMPTY';

if( MY_ARGS.print ) {
  console.log( convert(input));

} else if( MY_ARGS.frequency) {
  console.log( freq(convert(input)));
}
