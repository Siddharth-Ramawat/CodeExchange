 /*
// To install a node module type in the terminal
// npm install module_name

Using installed npm packages
 */

 // Execute the following code after installing lodash
 
const _ = require('lodash');
let example = _.fill([1,2,3,4,5], "banana", 1,4);
console.log(example);
