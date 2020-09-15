'use strict';
const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Fighter extends Model {
    static associate (models) {

    }
  }

  Fighter.init({
    /**
      * Fighter name
      * @type {string}
    */
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isLength: {
          min: 1,
          msg: 'Short name, can not be empty',
        },
      },
    },
    /**
      * Fighter name
      * @type {string}
    */
    nickName: {
      type: DataTypes.STRING,
      field: 'nick_name',
      allowNull: false,
    },
    /**
      * Fighter age
      * @type {integer}
    */
    age: {
      type: DataTypes.INTEGER,
      allowNull: true,
      min: 18,
      validate: {
        isInt: {
          msg: 'Fighter age should be integer',
        },
      },
    },
    /**
      * Fighter height
      * @type {integer}
    */
    height: {
      allowNull: true,
      type: DataTypes.STRING,
      validate: {
        isInt: {
          msg: 'Fighter height should be integer',
        },
      },
    },
    /**
      * Fighter weight
      * @type {integer}
    */
    weight: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Fighter weight should be integer',
        },
      },
    },
    /**
      * Fighter wins
      * @type {integer}
    */
    wins: {
      type: DataTypes.INTEGER,
      min: 0,
    },
    /**
      * Fighter losses
      * @type {integer}
    */
    losses: {
      type: DataTypes.INTEGER,
      min: 0,
    },
  }, {
    sequelize,
    modelName: 'Fighters',
    tableName: 'fighters',
  });
  
  return Fighter;
};
