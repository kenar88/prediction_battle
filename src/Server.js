const express = require('express');

const Logger = require('./Logger');

class Server {
  constructor() {
    this.app = express();
    this.PORT = process.env.PORT || 5000;
  }

  run() {
    this.app.use(express.json());

    this.app.use('/api/auth', require('./routes/api/auth'));
    this.app.use('/api/users', require('./routes/api/users'));

    const server = this.app.listen(
      this.PORT, () => Logger.log(`App is running on ${this.PORT}`
      ));

    const io = require('./socket').init(server);

    // eslint-disable-next-line no-unused-vars
    io.on('connect', (socket) => {
      Logger.log('Push data');
    })
  }
}

module.exports = Server;
