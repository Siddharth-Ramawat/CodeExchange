/*

Creating a http server using the HTTP module

*/
const http = require('http');
const server = http.createServer( (req, res) => {
  // res.write("Hello world from Siddharth using nodejs");
  // res.end();

  if(req.url === '/'){
    res.write("Hello world from Siddharth using nodejs");
    //res.end() is used to send response to the user
    res.end();
  }
  else {
    res.write("Using some other domain");
    res.end();

  }
} );

// To determine which port we want our response to be shown
server.listen('3000')
// Type localhost:3000 in the browser
