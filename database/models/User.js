'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
    }
  };
  User.init({
    /**
      * User name
      * @type {string}
    */
    name: {
      type: DataTypes.STRING,
      allowNull: false,      
    },
    /**
      * User email
      * @type {string}
    */
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: {
          msg: 'User email must be a valid email address',
        },
      },
    },
    /**
      * User password
      * @type {string}
    */
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [7, 100],
          msg: 'The password length should be between 7 and 100 characters',
        }
      },
    },
    /**
      * Events count user took part in; stats related column
      * @type {integer}
    */
    completedEvents: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'completed_events',
      validate: {
        isInt: {
          msg: 'Completed events count shold be an integer',
        },
      },
    },
    /**
      * Overall user points in all events; stats related column
      * @type {integer}
    */
    overallPoints: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'overall_points',
      validate: {
        isInt: {
          msg: 'Overall points count shold be an integer',
        },
      },
    },
    /**
      * Total number of correct user predictions; stats related column
      * @type {integer}
    */
    predictionsCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'predictions_count',
      validate: {
        isInt: {
          msg: 'Predictions count shold be an integer',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Users',
    tableName: 'users'
  });
  return User;
};