const { DataTypes } = require('sequelize');

const Status = (sequelize) => {
    return sequelize.define('status', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
};

module.exports = Status;
