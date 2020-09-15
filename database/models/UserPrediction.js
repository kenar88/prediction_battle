'use strict';
const {
  Model
} = require('sequelize');

const VERDICTS = require('../constants');

module.exports = (sequelize, DataTypes) => {
  class UserPrediction extends Model {
    static associate(models) {
      
    }
  };
  UserPrediction.init({
    /**
      * User prediction belongs
      * @type {integer}
    */
    userId: {
      type: DataTypes.INTEGER,
      field: 'user_id',
      allowNull: false,
      validate: {
        isInt: {
          msg: 'user_id should be integer',
        },
      },
    },
    /**
      * Event id
      * @type {integer}
    */
    eventId: {
      type: DataTypes.INTEGER,
      field: 'event_id',
      allowNull: false,
      validate: {
        isInt: {
          msg: 'event_id should be integer',
        },
      },
    },
    /**
      * Action(fight) id
      * @type {integer}
    */
    actionId: {
      type: DataTypes.INTEGER,
      field: 'action_id',
      allowNull: false,
      validate: {
        isInt: {
          msg: 'event_id should be integer',
        },
      },
    },
    /**
      * Predicted winner name
      * @type {integer}
    */
    verdictWinner: {
      type: DataTypes.STRING,
      field: 'verdict_winner',
      allowNull: true,
      validate: {
        validName(value) {
          if(value === null || value === '' || value.length < 2) {
            throw new Error('The name should consist of at least two characters');
          }
        },
      },
    },
    /**
      * Predicted finish type or decision
      * @type {string}
    */
    verdictType: {
      type: DataTypes.STRING,
      field: 'verdict_type',
      allowNull: true,
      validate: {
        decisionType(value) {
          if (!VERDICTS.includes(value)) {
            throw new Error(`Verdict type must be one of: ${vericts.join(', ')}`);
          }
        },
      },
    },
    /**
      * Predicted final round
      * @type {integer}
    */
    verdictRound: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: 'verdict_round',
      validate: {
        min: 1,
        max: 5,
      },
    },
  }, {
    sequelize,
    modelName: 'UserPredictions',
    tableName: 'user_predictions',
  });

  return UserPrediction;
};
