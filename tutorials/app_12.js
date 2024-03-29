/*
  Serving Static Files with Express
*/
const express =require('express');
const path = require('path');
const app = express();

//use() is required for middleware
app.use('/public', express.static(path.join(__dirname, 'static')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));

});
app.listen(3000);
