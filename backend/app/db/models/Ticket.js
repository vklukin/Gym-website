const { DataTypes } = require('sequelize');

const Ticket = (sequelize) => {
    return sequelize.define('ticket', {
        ticket_id: {
            type: DataTypes.BIGINT,
            allowNull: false,
            primaryKey: true,
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
};

module.exports = Ticket;
