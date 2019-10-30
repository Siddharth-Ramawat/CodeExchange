const express = require('express');
const route = express.Router();

route.use((req, res, next) => {
  console.log("Middleware being used");
  next();
})

route.get('/', (req, res) => {
  res.send("/ being hit")
});

route.get('/example', (req, res) => {
  res.send('Example Domain');

});

module.exports = route;
