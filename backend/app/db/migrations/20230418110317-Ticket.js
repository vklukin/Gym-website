"use strict";

const { DataTypes } = require("sequelize");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("ticket", {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      ticket_value: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      ticket_rate: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      start_period: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      end_period: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("ticket");
  },
};
