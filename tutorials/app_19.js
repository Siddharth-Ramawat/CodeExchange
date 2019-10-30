/*
Working with the Express Router
*/
const express =require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');
app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));

const people = require('./routes/people');
app.use('/people', people);

app.listen(3000);
