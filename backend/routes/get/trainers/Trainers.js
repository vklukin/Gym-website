const { QueryTypes } = require('sequelize');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.get(
        '/api/get/trainers',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const response = await sequelize.sequelize.query(
                `SELECT id, name FROM users WHERE role_id = '${ROLES_NUMBERS.TRAINER}'`,
                { type: QueryTypes.SELECT }
            );

            return res.status(200).json(response);
        }
    );
};
