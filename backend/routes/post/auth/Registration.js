const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const { STATUS, STATUS_NAMES } = require('../../../app/constants/Status');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.post(
        '/api/post/auth/registration',
        CheckToken(app),
        CheckRole([ROLE_NAMES[ROLES_NUMBERS.ADMIN], ROLE_NAMES[ROLES_NUMBERS.MODERATOR]]),
        async (req, res) => {
            const { userName, userEmail, userPassword, ticket } = req.body;
            let candidate;

            await sequelize.sequelize
                .query(`SELECT * FROM users WHERE email = '${userEmail}'`, {
                    type: QueryTypes.SELECT,
                })
                .then((data) => {
                    candidate = data;
                });

            if (candidate.length > 0) {
                return res
                    .status(400)
                    .json({ message: 'Пользователь с такой почтой уже зарегистрирован' });
            }

            const hashedPassword = bcrypt.hashSync(userPassword, 10);

            if (ticket) {
                await sequelize.users.create({
                    name: userName,
                    email: userEmail,
                    password: hashedPassword,
                    role_id: ROLES_NUMBERS.USER,
                    ticket_id: +ticket.ticket_id,
                    status_id: STATUS.ACTIVE,
                });

                await sequelize.ticket.create({
                    ticket_id: +ticket.ticket_id,
                    ticket_rate: ticket.ticket_rate,
                    start_period: ticket.start_period,
                    end_period: ticket.end_period,
                });

                res.status(200).json({ message: 'Пользователь успешно зарегистрирован!' });
            } else {
                await sequelize.users.create({
                    name: userName,
                    email: userEmail,
                    password: hashedPassword,
                    role_id: ROLES_NUMBERS.USER,
                    ticket_id: null,
                    status_id: STATUS.ACTIVE,
                });

                res.status(200).json({ message: 'Пользователь успешно зарегистрирован!' });
            }
        }
    );
};
