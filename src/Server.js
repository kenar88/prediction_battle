const express = require('express');

const Logger = require('./Logger');

let instanceCount = 0;

class Server {
  constructor() {
    if(instanceCount) {
      throw new Error('Server class is a singleton');
    }
    instanceCount++;

    this.app = express();
    this.PORT = process.env.PORT || 5000;
  }

  run() {
    this.app.use('/api/auth', require('./routes/api/auth'));
    this.app.use('/api/users', require('./routes/api/users'));
    this.app.listen(this.PORT, () => Logger.log(`App is running on ${this.PORT}`));
  }
}

module.exports = Server;
