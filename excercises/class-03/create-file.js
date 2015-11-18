'use strict';

const fs = require("fs");
const data = 'Simply Easy Learning';

// Create a writable stream
let writerStream = fs.createWriteStream('output.txt');

// Write the data to stream with encoding to be utf8
writerStream.write(data,'UTF8');

// Mark the end of file
writerStream.end();

// Handle stream events --> finish, and error
writerStream.on('finish', function() {
    console.log("Write completed.");
});

writerStream.on('error', function(err){
   console.log(err.stack);
});

setTimeout(function() {
  console.log("Program Ended");
}, 10);
