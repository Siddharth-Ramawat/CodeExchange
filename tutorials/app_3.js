// Working with the file system module
const fs = require('fs');

//create a file

// fs.writeFile('example.txt', "This is an example",
//   (err) => {
//         if(err){
//           console.log(err);
//         }
//         else{
//           console.log("Your file has been succesfully created");
//           fs.readFile('example.txt', 'utf-8' ,(err, file) => {
//             if(err){
//               console.log(err);
//             }
//             else{
//               console.log(file);
//             }
//         });
//       }
// });

// rename a file

// fs.rename('example.txt', 'example_2.txt', (err) => {
//   if(err)
//   console.log(err);
//   else {
//     console.log("succesfully renamed the file");
//   }
// });

//append a flle

// fs.appendFile('example_2.txt', "\n Some data to append", (err) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log('succesfully appended data to the file');
//   }
// });

// delete a file

// fs.unlink('example_2.txt', (err) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("succesfully deleted the file");
//   }
// } );
