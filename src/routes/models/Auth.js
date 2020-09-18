const router = require("../api/auth");

class Auth {
  constructor(router) {
    this._router = router;
  }

  getRout() {
    this._router.get('/', (req, res) => res.send('Cmmon BABY!!!!'));

    return this._router;
  }
}

module.exports = Auth;