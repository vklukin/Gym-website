const sequelize = require('../../../app/db/db');
const { QueryTypes } = require('sequelize');
const { ROLES_NUMBERS, ROLE_NAMES } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.delete(
        '/api/delete/workout/:id',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const { id } = req.params;
            const result = [];

            await sequelize.workouts.destroy({
                where: {
                    id: id,
                },
            });

            const workoutsResponse = await sequelize.sequelize.query(
                'SELECT * FROM workouts WHERE workout_time > NOW()',
                {
                    type: QueryTypes.SELECT,
                }
            );

            for (let i = 0; i < workoutsResponse.length; i++) {
                const record = workoutsResponse[i];

                let trainer = await sequelize.sequelize.query(
                    `SELECT name FROM users WHERE role_id = '${ROLES_NUMBERS.TRAINER}' AND id = '${record.trainer_id}'`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );

                let client = await sequelize.sequelize.query(
                    `SELECT name FROM users WHERE id = '${record.user_id}'`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );

                result.push({
                    id: record.id,
                    trainer_name: trainer[0].name,
                    user_name: client[0].name,
                    workout_time: record.workout_time,
                    workout_price: record.workout_price,
                });
            }

            return res.json(result);
        }
    );
};
