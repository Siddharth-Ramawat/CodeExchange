/*
Form Validation with Joi 
*/
const express = require('express');
// Joi is being used for form validation
const joi = require('joi');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));
app.use(bodyParser.urlencoded({extended : false}));

//The Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static', 'index.html'));

});

app.post('/', (req, res) =>{
  console.log(req.body);
  const schema = joi.object().keys({
    email : joi.string().trim().email().required(),
    password : joi.string().min(5).max(32).required()
  });
  joi.validate(req.body, schema, (err, result) => {
    if(err)
    {
      console.log(err);
      res.send("An error has occured");
    }
    else {
      console.log(result);
      res.send("Successfully posted data")
    }
  })
  //database work here

});
app.listen(3000);
