const moment = require('moment');

class Console {
  static log(message, obj) {
    const additionalData = obj ? JSON.stringify(obj) : '';
    const date = moment().format('DD-MM-YYYY HH:mm:ss');
    let msg = message;
    if (message instanceof Error) {
      msg = `ERROR: ${message.message}\n STACK:${JSON.stringify(message.stack)}`;
    }
    // eslint-disable-next-line no-console
    console.log(`${date} ${msg} ${additionalData}`);
  }
}

module.exports = Console;
