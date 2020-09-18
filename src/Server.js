const express = require('express');

const Logger = require('./Logger');

class Server {
  constructor() {
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
