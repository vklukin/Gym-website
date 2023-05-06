const { QueryTypes } = require('sequelize');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.get(
        '/api/get/workouts/user',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.USER],
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const result = [];
            const { u, sort } = req.query;

            let workoutsResponse;

            if (!sort) {
                return res.status(400).json({ message: 'Chose sort type: "not" or "history"' });
            }
            if (!u) {
                return res.status(400).json({ message: "Don't get user's id!" });
            }

            if (sort === 'not') {
                workoutsResponse = await sequelize.sequelize.query(
                    `SELECT * FROM workouts WHERE user_id = '${u}' AND workout_time > NOW() ORDER BY workout_time DESC`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );
            }
            if (sort === 'history') {
                workoutsResponse = await sequelize.sequelize.query(
                    `SELECT * FROM workouts WHERE user_id = '${u}' AND workout_time < NOW() ORDER BY workout_time ASC`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );
            }

            for (let i = 0; i < workoutsResponse.length; i++) {
                const record = workoutsResponse[i];

                let trainer = await sequelize.sequelize.query(
                    `SELECT name FROM users WHERE role_id = '${ROLES_NUMBERS.TRAINER}' AND id = '${record.trainer_id}'`,
                    {
                        type: QueryTypes.SELECT,
                    }
                );

                result.push({
                    trainer_name: trainer[0].name,
                    workout_time: record.workout_time,
                    workout_price: record.workout_price,
                });
            }

            return res.json(result);
        }
    );
};
