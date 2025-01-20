// Create web server    
// 1. Create a web server
// 2. Read the HTML file and send it to the client
// 3. Start the server and listen on port 3000
// 4. Output a message to the console

// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

// Configure our HTTP server to respond with Hello World to all requests.
var server = http.createServer(function (request, response) {
  console.log('request ', request.url);

  if (request.url === '/index.html') {
    fs.readFile('index.html', function (err, data) {
      response.writeHead(200, { 'Content-Type': 'text/html' });
      response.write(data);
      response.end();
    });
  } else {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write('<h1>Hello World</h1>');
    response.end();
  }
});

// Listen on port 3000, IP defaults to
