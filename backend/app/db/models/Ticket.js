const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Ticket = sequelize.define("tickets", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ticket_value: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  beginning_period: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  end_period: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

const asyncFunc = async () => {
  await sequelize.sync({ force: true });
};

asyncFunc();

module.exports = Ticket;
