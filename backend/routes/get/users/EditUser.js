const { QueryTypes } = require('sequelize');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.get(
        '/api/get/user/:id/edit',
        CheckToken(app),
        CheckRole([ROLE_NAMES[ROLES_NUMBERS.ADMIN], ROLE_NAMES[ROLES_NUMBERS.MODERATOR]]),
        async (req, res) => {
            const { id } = req.params;
            let user;

            await sequelize.sequelize
                .query(
                    `SELECT id, name, email, role_id, createAt, ticket_id, status_id FROM users WHERE id = '${id}'`,
                    {
                        type: QueryTypes.SELECT,
                    }
                )
                .then((data) => {
                    user = data[0];
                });

            if (!user) {
                return res.status(200).send([]);
            }

            if (user.ticket_id) {
                await sequelize.sequelize
                    .query(`SELECT * FROM ticket WHERE ticket_id = '${user.ticket_id}'`, {
                        type: QueryTypes.SELECT,
                    })
                    .then((data) => {
                        delete user.ticket_id;
                        user.ticket = data[0];
                    });

                user.role = ROLE_NAMES[user.role_id];
                delete user.role_id;

                await sequelize.sequelize
                    .query(`SELECT * FROM status WHERE id = '${user.status_id}'`, {
                        type: QueryTypes.SELECT,
                    })
                    .then((data) => {
                        user.status = data[0].role;
                    });
                delete user.status_id;
            } else {
                user.role = ROLE_NAMES[user.role_id];
                delete user.role_id;

                await sequelize.sequelize
                    .query(`SELECT * FROM status WHERE id = '${user.status_id}'`, {
                        type: QueryTypes.SELECT,
                    })
                    .then((data) => {
                        user.status = data[0].role;
                    });
                delete user.status_id;
            }

            return res.json(user || []);
        }
    );
};
