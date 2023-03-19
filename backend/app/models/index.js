const Sequelize = require("sequelize");

const DBConfig = require("../configs/db.config");

const sequelize = new Sequelize(
  DBConfig.DATABASE,
  DBConfig.USER,
  DBConfig.PASSWORD,
  {
    host: DBConfig.HOST,
    dialect: DBConfig.dialect,
    port: DBConfig.port,
    operatorsAliases: false,
    pool: {
      max: DBConfig.pool.max,
      min: DBConfig.pool.min,
      acquire: DBConfig.pool.acquire,
      idle: DBConfig.pool.idle,
    },
  }
);

try {
  await sequelize.authenticate();
  console.log("Соединение с БД было успешно установлено");
} catch (e) {
  console.log("Невозможно выполнить подключение в БД: " + e);
}
