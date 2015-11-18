'use strict';

const hello = require('./mod_hello');
const myMod = require('./mod_foo');

require('./mod_hello')();

myMod.foo();
myMod.bar();
hello();


