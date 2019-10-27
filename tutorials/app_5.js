/*
Readable and writable streams
*/
const fs3 = require('fs');
const readStream = fs3.createReadStream('./example.txt', 'utf8');
const writeStream = fs3.createWriteStream('./example_2.txt', 'utf8');
readStream.on("data", (chunk) => {
  // console.log(chunk);
  writeStream.write(chunk);
  // Writing to another file while reading the previous file

});

const read = fs3.createReadStream('./largefile.txt', 'utf8',
read.on('data', (chunk) = {
  console.log(chunk);
}));
