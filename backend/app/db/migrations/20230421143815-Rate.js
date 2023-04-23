'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('rate', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                primaryKey: true,
            },
            rate_name: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            format: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            duration: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            first_pay: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            next_pay: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('rate');
    },
};
