/*
Pipes and pipe Chaining
*/
const fs4 = require('fs');

//zlib is used for compression or compresssing tutorial_files
const zlib = require('zlib');

//To zip the files in .gz format we need to create a Gzip
//const gzip = zlib.createGzip();

//To unzip a zipped .gz file we need to create a Gunzip
const gunzip = zlib.createGunzip();

// If you are using a normal readStream
// const readStream = fs4.createReadStream('example.txt', 'utf8');

// if you are using gunzip uncomment below code
const readStream = fs4.createReadStream('example_2.txt.gz');

// If you are using a normal writeStream
// const writeStream = fs4.createWriteStream('example_2.txt');

// if you are using gunzip uncomment below code
const writeStream = fs4.createWriteStream('uncompressed.txt');

// if you are using gzip uncomment below code
// const writeStream = fs4.createWriteStream('example_2.txt.gz');

// readStream.on('data', (chunk) = {
//   console.log(chunk);
// });

//We can use a pipe to do the above work in a single line.
// readStream.pipe(writeStream);


readStream.pipe(gzip).pipe(writeStream);
