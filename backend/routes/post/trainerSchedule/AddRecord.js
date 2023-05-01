const sequelize = require('../../../app/db/db');
const { ROLES_NUMBERS, ROLE_NAMES } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.post(
        '/api/post/add-record',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const { trainer_id, user_id, user_name, datetime, price } = req.body;

            if (!trainer_id)
                return res.status(400).json({ message: 'Поле тренера не должно быть пустым!' });
            if (!user_id && !user_name)
                return res.status(400).json({ message: 'Поле ФИО клиента не должно быть пустым!' });

            try {
                await sequelize.workouts.create({
                    trainer_id: trainer_id,
                    user_id: user_id || null,
                    noname_user: user_name,
                    workout_time: `${datetime.split('T')[0]} ${datetime.split('T')[1]}`,
                    workout_price: price,
                });

                return res.status(200).json({ message: 'Запись успешно добавлена!' });
            } catch (e) {
                return res.status(500).json({ message: `Произошла ошибка: ${e}` });
            }
        }
    );
};
