const Logger = require('./Logger');
let instanceCount = 0;

class Server {
  constructor(express) {
    if(instanceCount) {
      throw new Error('Server class is a singleton');
    }
    instanceCount++;

    this.app = express();
    this.PORT = process.env.PORT || 5000;
  }

  run() {
    this.app.get('/', (req, res) => {
      res.send('Testing server');
    });

    this.app.listen(this.PORT, () => Logger.log(`App is running on ${this.PORT}`));
  }
}

module.exports = Server;
