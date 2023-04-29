const { QueryTypes } = require('sequelize');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.get(
        '/api/get/workouts/:sort',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const result = [];
            const { sort } = req.params;

            const workoutsResponse =
                sort === 'not'
                    ? await sequelize.sequelize.query(
                          'SELECT * FROM workouts WHERE workout_time > NOW()',
                          {
                              type: QueryTypes.SELECT,
                          }
                      )
                    : await sequelize.sequelize.query(
                          'SELECT * FROM workouts WHERE workout_time < NOW()',
                          {
                              type: QueryTypes.SELECT,
                          }
                      );

            for (let i = 0; i < workoutsResponse.length; i++) {
                const record = workoutsResponse[i];
                let client;

                let trainer = await sequelize.sequelize.query(
                    `SELECT name FROM users WHERE role_id = '${ROLES_NUMBERS.TRAINER}' AND id = '${record.trainer_id}'`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );

                if (record.user_id) {
                    await sequelize.sequelize
                        .query(
                            `SELECT name FROM users WHERE role_id = '${ROLES_NUMBERS.USER}' AND id = '${record.user_id}'`,
                            {
                                type: QueryTypes.SELECT,
                            }
                        )
                        .then((data) => {
                            client = data[0].name;
                        });
                } else {
                    client = record.noname_user;
                }

                result.push({
                    id: record.id,
                    trainer_name: trainer[0].name,
                    user_name: client,
                    workout_time: record.workout_time,
                    workout_price: record.workout_price,
                });
            }

            return res.json(result);
        }
    );
};
