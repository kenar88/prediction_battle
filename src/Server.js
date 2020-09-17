const express = require('express');

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
    
    // eslint-disable-next-line
    this.app.listen(this.PORT, () => console.log(`App is running on ${this.PORT}`));
  }
}

module.exports = Server;