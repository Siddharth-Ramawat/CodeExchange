/*
Working with Express Get requests
*/

const express =require('express');
const app = express();

//Shows Hello, World in the body of the webpage localhost:3000/
// here the '/' represents the index (or) the home page
app.get('/', (req, res) => {
  res.send('Hello, World');

});


//Trying another route instead of '/' i.e. localhost:3000/example
app.get('/example', (req, res) => {
  res.send("You're on example route");
});


// After executing this you can try to provide a query to the page by typing
// ?xyz=abc, where xyz can be the parameter _name
// and abc is the parameter value. The output would be displayed on the console
app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);
  res.send(req.params.name + " : " + req.params.age);
});
app.listen(3000);
