/*
EJS Templates with Express
*/

const express =require('express');
const path = require('path');
const app = express();

const bodyParser = require('body-parser');

app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));
app.get('/:userQuery', (req, res) => {
  res.render('index', {data : {userQuery : req.params.userQuery,
                              searchResults: ['book1', 'book2', 'book3'],
                              loggedIn : true,
                              username: 'Siddharth'}});

});

app.post('/', (req, res) =>{
  console.log(req.body);
  //database work here
  res.send("Successfully posted data");
});
app.listen(3000);
