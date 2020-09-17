const Server = require('./src/Server');


const server = new Server(require('express'));

server.run();