const express =require('express');
const path = require('path');
const app = express();
const joi = require('joi');

var MongoClient = require('mongodb').MongoClient

const bodyParser = require('body-parser');
app.use('/public', express.static(path.join(__dirname, 'static')));

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended : false}));
app.get('/', (req, res) =>{
  res.render('index');

});

app.post('/signup', (req, res) =>{
  console.log(req.body);
  //database work here
  MongoClient.connect('mongodb://localhost:27017/code', function (err, client) {
    if (err) throw err

    var db = client.db('code')

    db.collection('Users').insertOne(req.body,function (err, result) {
      if (err) throw err

      console.log(result)
    });
  });
  res.redirect('/');
});

app.post('/login', (req, res) => {
  if(!req.body.id || !req.body.password){
      res.status("400");
      res.send("Invalid details!")
    }
    else{
      
    }
})
const users = require('./routes/users');

app.listen(3000, () => {
  console.log("Server is listening on port 3000");
});


// app.route('/users'){
//   .get((req, res) => {
//
//   })
//   .post((req, res) =>{
//
//   })
// }


// var mysql = require('mysql')
// var connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'dbuser',
//   password: 's3kreee7',
//   database: 'my_db'
// })
//
// connection.connect()
//
// connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
//   if (err) throw err
//
//   console.log('The solution is: ', rows[0].solution)
// })
//
// connection.end()
