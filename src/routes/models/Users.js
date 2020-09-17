class Users {
  constructor(dbModels) {
    this._dbModels = dbModels;
  }
  getRoute(req, res) {
    res.send('Test users');
  }
}

module.exports = Users;
