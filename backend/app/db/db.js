const { Sequelize } = require("sequelize");

const DBConfig = require("../configs/db.config");
const { ROLES_NUMBERS, ROLE_NAMES } = require("../constants/RoleConstant");
const bcrypt = require("bcrypt");

const sequelize = new Sequelize(
  DBConfig.DATABASE,
  DBConfig.USER,
  DBConfig.PASSWORD,
  {
    host: DBConfig.HOST,
    dialect: DBConfig.dialect,
    port: DBConfig.port,
    define: {
      timestamps: false,
      freezeTableName: true,
      charset: "utf8",
      collate: "utf8_general_ci",
    },
    pool: {
      max: DBConfig.pool.max,
      min: DBConfig.pool.min,
      acquire: DBConfig.pool.acquire,
      idle: DBConfig.pool.idle,
    },
  }
);

sequelize
  .authenticate()
  .then(() => {
    console.log("Соединение с БД было успешно установлено");
  })
  .catch((e) => {
    console.log("Невозможно выполнить подключение в БД: " + e);
  });

const db = {};

db.sequelize = sequelize;

db.users = require("./models/Users")(sequelize);
db.ticket = require("./models/Ticket")(sequelize);
db.role = require("./models/Role")(sequelize);
db.sequelize.sync().then(() => {
  console.log("Drop and re-sync db.");
});

// db.users.create({
//   name: "Владислав Клюкин",
//   email: "vklukin1@gmail.com",
//   password: bcrypt.hashSync("Kubi-Kitsune.7352!", 10),
//   role_id: ROLES_NUMBERS.USER,
// });
// db.role.bulkCreate([
//   {
//     id: ROLES_NUMBERS.USER,
//     role: ROLE_NAMES[ROLES_NUMBERS.USER],
//   },
//   {
//     id: ROLES_NUMBERS.TRAINER,
//     role: ROLE_NAMES[ROLES_NUMBERS.TRAINER],
//   },
//   {
//     id: ROLES_NUMBERS.ADMIN,
//     role: ROLE_NAMES[ROLES_NUMBERS.ADMIN],
//   },
//   {
//     id: ROLES_NUMBERS.MODERATOR,
//     role: ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
//   },
// ]);

module.exports = db;
