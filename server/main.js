// const http = require('http');

import http from 'http'; //TODO: Check if imports work now Prcl installed

// const http = require('http');
/**
 * @deprecated since I am not working on a node server, will look into later/separate project
 */

const buffer = Buffer.from('Sean Roughton', 'utf-8');

console.log(buffer.toJSON());

http
  .createServer(function (request, response) {
    // send http header
    // HTTP Status 200 : OK
    // Content Type: text/plain

    response.writeHead(200, { 'Content-Type': 'text/plain' });

    // Send the response body
    response.end('Print Hello World \n');
  })
  .listen(8081);

console.log('Server is running at http://127.0.0.1:8081');
