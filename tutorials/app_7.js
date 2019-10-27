/*

Creating a http server using the HTTP module

*/
const http = require('http');
const server = http.createServer( (req, res) => {
  res.write("Hello world from Siddharth using nodejs");
  res.end();
} );

// To determine which port we want our response to be shown
server.listen('3000')
