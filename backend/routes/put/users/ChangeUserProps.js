const { QueryTypes } = require('sequelize');
const bcrypt = require('bcrypt');

const sequelize = require('../../../app/db/db');
const { ROLE_NAMES, ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const CheckToken = require('../../../app/middlewares/Auth/CheckToken');
const CheckRole = require('../../../app/middlewares/Auth/CheckRole');

module.exports = (app) => {
    app.put(
        '/api/put/user',
        CheckToken(app),
        CheckRole([
            ROLE_NAMES[ROLES_NUMBERS.USER],
            ROLE_NAMES[ROLES_NUMBERS.TRAINER],
            ROLE_NAMES[ROLES_NUMBERS.ADMIN],
            ROLE_NAMES[ROLES_NUMBERS.MODERATOR],
        ]),
        async (req, res) => {
            const { id, type } = req.query;

            if (!id) return res.status(400).json({ message: 'Не указан id пользователя!' });

            switch (type) {
                case 'password':
                    let oldUserPassword = '';
                    const { newPassword, oldPassword } = req.body;

                    if (!newPassword || !oldPassword)
                        return res
                            .status(400)
                            .json({ message: 'Не удалось получить пароли клиента!' });

                    await sequelize.sequelize
                        .query(`SELECT password FROM users WHERE id = '${id}'`, {
                            type: QueryTypes.SELECT,
                        })
                        .then((data) => {
                            oldUserPassword = data[0].password;
                        });

                    if (bcrypt.compareSync(oldPassword, oldUserPassword)) {
                        await sequelize.users.update(
                            {
                                password: bcrypt.hashSync(newPassword, 10),
                            },
                            {
                                where: {
                                    id: id,
                                },
                            }
                        );

                        return res.status(200).json({ message: 'Пароль успешно изменен!' });
                    } else {
                        return res.status(400).json({ message: 'Старый пароль не верный' });
                    }
                case 'email':
                    const { oldEmail, newEmail } = req.body;

                    const oldUserEmail = await sequelize.sequelize.query(
                        `SELECT email FROM users WHERE id = '${id}'`,
                        { type: QueryTypes.SELECT }
                    );

                    if (oldUserEmail[0].email !== oldEmail)
                        return res.status(400).json({ message: 'Старая почта не верна' });

                    const isExistEmail = await sequelize.sequelize.query(
                        `SELECT id FROM users WHERE email = '${newEmail}'`,
                        { type: QueryTypes.SELECT }
                    );

                    if (isExistEmail.length > 0)
                        return res.status(400).json({ message: 'Такая почта уже существует' });

                    await sequelize.users.update(
                        {
                            email: newEmail,
                        },
                        {
                            where: {
                                id: id,
                            },
                        }
                    );

                    return res.status(200).json({ message: 'Почта успешно изменена!' });
                default:
                    return res.status(400).json({ message: 'Не указан тип действия' });
            }
        }
    );
};
