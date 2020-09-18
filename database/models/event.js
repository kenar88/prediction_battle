'use strict';
const moment = require('moment');
const dateFormat = 'DD-MM-YYYY';

const {
  Model,
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    static associate(models) {
      this.hasMany(models.Actions, {
        foreignKey: 'event_id',
        as: 'actions',
      });
    }
  }
  Event.init({
    /**
      * Event number; event can be numbered or 'Fight night'
      * @type {integer}
    */
    number: {
      type: DataTypes.INTEGER,
      allowNull: true,
      validate: {
        isInt: {
          msg: 'Event number should be integer',
        },
      },
    },
    /**
      * Actions(fights) count
      * @type {integer}
    */
    actionsCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: 'actions_count',
      validate: {
        isInt: {
          msg: 'Fights count should be integer',
        },
        min: 5,
      },
    },
    /**
      * Event date
      * @type {string}
    */
    date: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        wrongDateFormat(value) {
          const isValidDAteFormat = moment(value, dateFormat, true).isValid();
          if (!isValidDAteFormat) {
            throw new Error(`Date format should be ${dateFormat}`);
          }
        },
      },
    },
  }, {
    sequelize,
    modelName: 'Events',
    tableName: 'events',
  });
  
  return Event;
};
