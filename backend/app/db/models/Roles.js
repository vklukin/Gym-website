const { DataTypes } = require("sequelize");

const sequelize = require("../db");
const ROLES = require("../../constants/RoleConstant");

const Roles = sequelize.define("roles", {
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

const asyncFunc = async () => {
  await sequelize.sync({ force: true });
  await Roles.bulkCreate([
    {
      id: ROLES.USER,
      role: "user",
    },
    {
      id: ROLES.TRAINER,
      role: "trainer",
    },
    {
      id: ROLES.ADMIN,
      role: "admin",
    },
    {
      id: ROLES.MODERATOR,
      role: "moderator",
    },
  ]);
};

asyncFunc();

module.exports = Roles;
