const sequelize = require('../../../app/db/db');
const { STATUS } = require('../../../app/constants/Status');
const { QueryTypes } = require('sequelize');

module.exports = (app) => {
    app.put('/api/put/users/:id', async (req, res) => {
        const { userName, userEmail, ticket, freezeUser } = req.body;
        const { id } = req.params;

        const isExistEmail = await sequelize.sequelize.query(
            `SELECT id FROM users where email = '${userEmail}'`,
            { type: QueryTypes.SELECT }
        );
        if (isExistEmail.length > 0)
            return res.status(400).json({ message: 'Такая почта уже существует!' });

        if (ticket) {
            await sequelize.users.update(
                {
                    name: userName,
                    email: userEmail,
                    ticket_id: +ticket.ticket_id,
                    status_id: freezeUser ? STATUS.FREEZE : STATUS.ACTIVE,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );

            await sequelize.ticket.create({
                ticket_id: +ticket.ticket_id,
                ticket_rate: ticket.ticket_rate,
                start_period: ticket.start_period,
                end_period: ticket.end_period,
            });

            return res.status(200).json({ message: 'Данные успешно изменены' });
        } else {
            await sequelize.users.update(
                {
                    name: userName,
                    email: userEmail,
                    status_id: freezeUser ? STATUS.FREEZE : STATUS.ACTIVE,
                },
                {
                    where: {
                        id: id,
                    },
                }
            );

            return res.status(200).json({ message: 'Данные успешно изменены' });
        }
    });
};
