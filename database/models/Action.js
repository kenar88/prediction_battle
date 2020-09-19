'use strict';
const {
  Model,
} = require('sequelize');

const VERDICTS = require('../constants');

const MAX_ROUND_COUNT = 5;
const MIN_ROUND_COUNT = 3;
const validName = (value) => {
  if(value === null || value.length < 1) {
    throw new Error('The name should consist of at least one character');
  }
};

module.exports = (sequelize, DataTypes) => {
  class Action extends Model {
    static associate(models) {
      this.belongsTo(models.Events, {
        foreignKey: 'event_id',
      })
    }
  }
  Action.init({
    /**
      * First fighter name
      * @type {string}
    */
    fighterA: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fighter_a',
      validate: {
        validName,
      },
    },
    /**
      * Second fighter name
      * @type {string}
    */
    fighterB: {
      type: DataTypes.STRING,
      allowNull: false,
      field: 'fighter_b',
      validate: {
        validName,
      },
    },
    /**
      * Action rounds count
      * @type {integer}
    */
    rounds: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        validRoundsCount(value) {
          if(value !== MIN_ROUND_COUNT && value !== MAX_ROUND_COUNT) {
            throw new Error(`Count of rounds should be ${MAX_ROUND_COUNT} or ${MIN_ROUND_COUNT}`)
          }
        },
      },
    },
    /**
      * Main event action or prelims action
      * @type {boolean}
    */
    mainEvent: {
      type: DataTypes.BOOLEAN,
      field: 'main_event',
    },
    /**
      * Main fight pointer
      * @type {boolean}
    */
    mainFight: {
      type: DataTypes.BOOLEAN,
      field: 'main_fight',
      defaultValue: false,
    },
    /**
      * Winner name
      * @type {integer}
    */
    verdictWinner: {
      type: DataTypes.STRING,
      field: 'verdict_winner',
      allowNull: true,
      defaultValue: '-',
      validate: {
        validName,
      },
    },
    /**
      * Finish type or decision
      * @type {string}
    */
    verdictType: {
      type: DataTypes.STRING,
      field: 'verdict_type',
      allowNull: true,
      defaultValue: '-',
      validate: {
        decisionType(value) {
          if (![...VERDICTS, '-'].includes(value)) {
            throw new Error(`Verdict type must be one of: ${VERDICTS.join(', ')}`);
          }
        },
      },
   },
    /**
      * Final round number; needed if the decision didn't make
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
    /**
      * Event id action belongs
      * @type {integer}
    */
    eventId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'event_id',
      validate: {
        isInt: {
          msg: 'Event id must be integer',
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Actions',
    tableName: 'actions',
  });

  return Action;
};
