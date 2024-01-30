//imports the built-in http module, which provides functionality to create an HTTP server.
const http = require('http');

/**
 * Setting up server constants
 * listening port 
 * and the host of the server
 */
const PORT = 1245;
const HOST = 'localhost';

/*
 * createServer() returns a new instance of an HTTP server, and this instance is assigned to the variable app. 
   This server instance is capable of handling HTTP requests and responses.
 */
const app = http.createServer();

/*
 * sets up an event listener for the request event. 
 * When a request is received, it responds with a plain text message "Hello Holberton School!". 
 * It sets the response headers for content type and content length, sets the status code to 200 (OK), 
 * and writes the response text to the response stream.
 * */
app.on('request', (_, res) => {
  const responseText = 'Hello Holberton School!';

  res.setHeader('Content-Type', 'text/plain');
  res.setHeader('Content-Length', responseText.length);
  res.statusCode = 200;
  res.write(Buffer.from(responseText));
});


/*
 * Starting the server and logging a message when it's ready
 * */
app.listen(PORT, HOST, () => {
  process.stdout.write(`Server listening at -> http://${HOST}:${PORT}\n`);
});

/*
 *This line exports the created server instance, making it available for use in other modules if needed.
 */
module.exports = app;
