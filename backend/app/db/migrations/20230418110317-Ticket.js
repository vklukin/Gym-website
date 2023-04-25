'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('ticket', {
            ticket_id: {
                type: DataTypes.BIGINT,
                allowNull: false,
                primaryKey: true,
                autoIncrement: true,
            },
            ticket_rate: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            start_period: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
            end_period: {
                type: DataTypes.DATEONLY,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('ticket');
    },
};
