/*
Pipes and pipe Chaining
*/
const fs4 = require('fs');

//zlib is used for compression or compresssing tutorial_files
const zlib = require('zlib');

const readStream = fs4.createReadStream('example.txt', 'utf8');
const writeStream = fs4.createWriteStream('example_2.txt');

// readStream.on('data', (chunk) = {
//   console.log(chunk);
// });

//We can use a pipe to do the above work in a single line.
readStream.pipe(writeStream);
