const { DataTypes } = require('sequelize');

const Rate = (sequelize) => {
    return sequelize.define('rate', {
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
};

module.exports = Rate;
