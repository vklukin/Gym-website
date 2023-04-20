const { DataTypes } = require("sequelize");

const Ticket = (sequelize) => {
  return sequelize.define("ticket", {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
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
};

module.exports = Ticket;
