/*
Middleware
*/
const express = require('express');
const path = require('path');

const app = express();

const bodyParser = require('body-parser');

// Creating your own custom Middleware
app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});
/*
// Executing Middleware only  for a certain domain 
app.use('/example',(req, res, next) => {
  console.log(req.url, req.method);
  next();
});
*/

/*
// Modification of the req object
app.use((req, res, next) => {
  req.banana = 'banana';
  next();
});
*/
//use() is required for middleware
app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.json());


app.get('/', (req, res) => {
  // console.log(req.banana);
  res.sendFile(path.join(__dirname, 'static', 'index.html'));

});
app.listen(3000);
