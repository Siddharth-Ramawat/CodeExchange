const fs2 = require('fs');

// creating a folder
// fs2.mkdir('tutorial_files', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("succesfully created a folder");
//   }
// });

//deleting a folder
// fs2.rmdir('tutorial_files', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   else {
//     console.log("succesfully deleted a folder");
//   }
// });

//deleting a file and a folder
// fs2.unlink('example.txt', (err) => {
//   if(err){
//     console.log(err);
//   }
//   else {
//     console.log("succesfully deleted the file");
//     fs2.rmdir('tutorial_files', (err) => {
//       if (err) {
//         console.log(err);
//       }
//       else {
//         console.log("succesfully deleted a folder");
//       }
//     });
//   }
// });

// Deleting files recursively in a folder
// fs2.readdir('tutorial_files', (err, files) => {
//   if (err) {
//           console.log(err);
//         }
//   else{
//     for(let file of files)
//        // console.log(file);
//         fs2.unlink('./tutorial_files/' + file, (err) => {
//           if(err){
//             console.log(err);
//           }
//           else {
//             console.log("Succesfully deleted file " + file);
//           }
//         });
//   }
// });
