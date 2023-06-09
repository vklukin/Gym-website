const { Sequelize } = require('sequelize');

const DBConfig = require('../configs/db.config');
const { ROLES_NUMBERS, ROLE_NAMES } = require('../constants/RoleConstant');
const { STATUS, STATUS_NAMES } = require('../constants/Status');
const bcrypt = require('bcrypt');

const sequelize = new Sequelize(DBConfig.DATABASE, DBConfig.USER, DBConfig.PASSWORD, {
    host: DBConfig.HOST,
    dialect: DBConfig.dialect,
    port: DBConfig.port,
    define: {
        timestamps: false,
        freezeTableName: true,
        charset: 'utf8',
        collate: 'utf8_general_ci',
    },
    pool: {
        max: DBConfig.pool.max,
        min: DBConfig.pool.min,
        acquire: DBConfig.pool.acquire,
        idle: DBConfig.pool.idle,
    },
    dialectOptions: {
        useUTC: false,
        dateStrings: true,
        typeCast: function (field, next) {
            if (field.type === 'DATETIME') {
                return field.string();
            }
            return next();
        },
    },
    timezone: '+05:00',
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Соединение с БД было успешно установлено');
    })
    .catch((e) => {
        console.log('Невозможно выполнить подключение в БД: ' + e);
    });

const db = {};

db.sequelize = sequelize;

db.users = require('./models/Users')(sequelize);
db.ticket = require('./models/Ticket')(sequelize);
db.role = require('./models/Role')(sequelize);
db.status = require('./models/Status')(sequelize);
db.workouts = require('./models/Workouts')(sequelize);

db.sequelize.sync();

// db.role.bulkCreate([
//     {
//         id: ROLES_NUMBERS.USER,
//         role: ROLE_NAMES[ROLES_NUMBERS.USER],
//     },
//     {
//         id: ROLES_NUMBERS.TRAINER,
//         role: ROLE_NAMES[ROLES_NUMBERS.TRAINER],
//     },
//     {
//         id: ROLES_NUMBERS.ADMIN,
//         role: ROLE_NAMES[ROLES_NUMBERS.ADMIN],
//     },
//     {
//         id: ROLES_NUMBERS.MODERATOR,
//         role: ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
//     },
// ]);
// db.status.bulkCreate([
//     {
//         id: STATUS.ACTIVE,
//         role: STATUS_NAMES[STATUS.ACTIVE],
//     },
//     {
//         id: STATUS.FREEZE,
//         role: STATUS_NAMES[STATUS.FREEZE],
//     },
//     {
//         id: STATUS.EXPIRED,
//         role: STATUS_NAMES[STATUS.EXPIRED],
//     },
// ]);
// db.users.bulkCreate([
//     {
//         name: 'Владислав Клюкин',
//         email: 'vklukin1@gmail.com',
//         password: bcrypt.hashSync('Kubi-Kitsune.7352!', 10),
//         role_id: ROLES_NUMBERS.ADMIN,
//         status_id: STATUS.ACTIVE,
//     },
//     {
//         name: 'Маргарита Ионкина',
//         email: 'vklukin23@gmail.com',
//         password: bcrypt.hashSync('Kubi-Kitsune.7352!', 10),
//         role_id: ROLES_NUMBERS.TRAINER,
//         status_id: STATUS.ACTIVE,
//     },
//     {
//         name: 'Евгение Клюкин',
//         email: 'mertisgt@gmail.com',
//         password: bcrypt.hashSync('Rkrby1475321', 10),
//         role_id: ROLES_NUMBERS.USER,
//         status_id: STATUS.ACTIVE,
//     },
// ]);
// db.workouts.bulkCreate([
//     {
//         trainer_id: 2,
//         user_id: 3,
//         workout_time: '2023.05.07 13:30:00',
//         workout_price: '1900',
//     },
//     {
//         trainer_id: 2,
//         noname_user: 'Клюкина Екатерина',
//         workout_time: '2023.04.28 13:30:00',
//         workout_price: '1900',
//     },
//     {
//         trainer_id: 2,
//         noname_user: 'Клюкина Екатерина',
//         workout_time: '2023.04.29 21:00:00',
//         workout_price: '1900',
//     },
// ]);

module.exports = db;
