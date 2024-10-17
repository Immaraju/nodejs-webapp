// Import the HTTP module from Node.js
const http = require('http');

// Define the hostname and port number for the server
const hostname = '0.0.0.0';
const port = 3000;

// Create the server and define the response behavior
const server = http.createServer((req, res) => {
  res.statusCode = 200;                  // Send a status code of 200 (OK)
  res.setHeader('Content-Type', 'text/plain');  // Set the response type to plain text
  res.end('Hello, World!\n');            // Send the text "Hello, World!" as the response
});

// Make the server listen on the defined port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
