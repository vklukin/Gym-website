const { DataTypes } = require('sequelize');

const Users = (sequelize) => {
    return sequelize.define('users', {
        id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createAt: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
        ticket_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
    });
};

module.exports = Users;
