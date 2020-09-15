'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Actions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fighter_a: {
        type: Sequelize.STRING
      },
      fighter_b: {
        type: Sequelize.STRING
      },
      rounds: {
        type: Sequelize.INTEGER
      },
      main_event: {
        type: Sequelize.BOOLEAN
      },
      main_fight: {
        type: Sequelize.BOOLEAN
      },
      event_id: {
        type: Sequelize.INTEGER
      },
      verdict_winner: {
        type: Sequelize.STRING
      },
      verdict_type: {
        type: Sequelize.STRING
      },
      verdict_round: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Actions');
  }
};
