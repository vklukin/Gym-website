'use strict';

const { DataTypes } = require('sequelize');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('workouts', {
            id: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
            },
            trainer_id: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            user_id: {
                type: DataTypes.INTEGER,
                allowNull: true,
            },
            noname_user: {
                type: DataTypes.STRING,
                allowNull: true,
            },
            workout_time: {
                type: DataTypes.DATE,
                allowNull: false,
            },
            workout_price: {
                type: DataTypes.DECIMAL,
                allowNull: false,
            },
        });
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('workouts');
    },
};
