/*
HTTP Post and Body Parser Module
*/
const express =require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));

// Body Parser is allowing us to parse URL Encoded forms, it parses the data for us and attaches it to the Body
app.use(bodyParser.urlencoded({extended : false}));
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));

});

app.post('/', (req, res) =>{
  console.log(req.body);
  //database work here
  res.send("Successfully posted data");
});
app.listen(3000);
