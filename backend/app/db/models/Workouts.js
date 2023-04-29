const { DataTypes } = require('sequelize');

const Workouts = (sequelize) => {
    return sequelize.define('workouts', {
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
};

module.exports = Workouts;
