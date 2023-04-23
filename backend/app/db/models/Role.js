const { DataTypes } = require('sequelize');

const Role = (sequelize) => {
    return sequelize.define('role', {
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

module.exports = Role;
