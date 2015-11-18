'use strict';

const fs = require('fs');
const file = 'example.txt';

// Read the contents of the file into memory.
fs.readFile(file, function (err, data) {
  
  // If an error occurred, throwing it will
  // display the exception and end our app.
  if (err) throw err;
  
  // data is a Buffer, convert to string.
  let text = data.toString();

  console.log('Buffer content: ', data);
  console.log('File content: ', text);

});
