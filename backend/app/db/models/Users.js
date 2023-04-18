const sequelize = require("../db");
const { DataTypes } = require("sequelize");

const Users = sequelize.define("users", {
  id: {
    type: DataTypes.INTEGER,
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

const asyncFunc = async () => {
  await sequelize.sync({ force: true });
};

asyncFunc();

module.exports = Users;
