const { QueryTypes } = require('sequelize');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.get(
        '/api/get/users-for-trainers/:userName',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const { userName } = req.params;
            const response = [];
            let counter = 0;

            if (userName) {
                await sequelize.sequelize
                    .query(`SELECT id, name FROM users WHERE name LIKE '%${userName}%'`, {
                        type: QueryTypes.SELECT,
                    })
                    .then((data) => {
                        for (let i = 0; i < data.length || counter === 5; i++) {
                            response.push(data[i]);
                            counter += 1;
                        }
                    });
            }

            return res.status(200).json(response);
        }
    );
};
