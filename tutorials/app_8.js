/*
Serving static files with http and file system modules
*/
const http = require('http');
const fs = require('fs');
const server = http.createServer( (req, res) => {
  const readStream = fs.createReadStream('./static/index.html');
  //Header for the response to let the client know what kind of data to be expecting
  res.writeHead(200,{'Content-type' : 'text/html'});

  readStream.pipe(res);

}).listen(3000);
