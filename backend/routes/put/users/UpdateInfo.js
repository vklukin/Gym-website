const sequelize = require('../../../app/db/db');
const { ROLES_NUMBERS } = require('../../../app/constants/RoleConstant');
const { STATUS } = require('../../../app/constants/Status');

module.exports = (app) => {
    app.put('/api/put/users/:id', async (req, res) => {
        const { userName, userEmail, ticket, freezeUser } = req.body;
        const { id } = req.params;

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
