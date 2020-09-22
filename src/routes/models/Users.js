const bcrypt = require('bcryptjs');

const Logger = require('../../Logger');

class Users {
  constructor(dbModels) {
    this._dbModels = dbModels;
  }

  async getRoute(req, res) {
    const {
      Users,
    } = this._dbModels;

    try {
      const {
        name,
        email,
        password,
      } = req.body;

      const user = await Users.findOne({
        where: {
          email,
        },
      });

      if (user) {
        return res.status(400).json({ errors:[{ msg: 'User already exists' }] });
      }

      const salt = await bcrypt.genSalt(10);
      const encryptedPassword = await bcrypt.hash(password, salt);

      await Users.create({
        name,
        email,
        password: encryptedPassword,
      });
      res.send('User registered');
    } catch (error) {
      Logger.log(error);
      res.status(500).send(error.message);
    }
    
  }
}

module.exports = Users;
