"use strict";

let http = require('http');

function requestCallback(request, response) {
    console.log('Hi');

    response.write('Hello World Server');
    response.end();
}

let server = http.createServer(requestCallback);

// listens to a port our computer has. Each port can transfer data between browser and server app
server.listen(8000);

console.log('Listening...');
