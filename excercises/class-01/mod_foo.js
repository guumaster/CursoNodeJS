'use strict';

function foo() { console.log('foo called'); return 'foo'; }
function bar() { console.log('bar called'); return 'bar'; }

module.exports = { foo, bar, baz: foo };

