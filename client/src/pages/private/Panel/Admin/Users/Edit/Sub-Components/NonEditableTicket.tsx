import React from 'react';
import classNames from 'classnames/bind';

import stylesAddUser from '../../Add/add-user.module.css';
import loginStyles from '../../../../../../public/Login/login.module.css';
import ticketStyles from '../../../../../../private/Panel/Admin/Users/Add/Sub-Components/ticket.module.css';

type TTicket = {
    ticket_id: number;
    ticket_rate: string;
    start_period: string;
    end_period: string;
};

export function NonEditableTicket({ ticketVal }: { ticketVal: TTicket }) {
    const cxArrUser = classNames.bind(stylesAddUser);
    const cxLogin = classNames.bind(loginStyles);
    const cxTicket = classNames.bind(ticketStyles);

    return (
        <>
            <div className={cxTicket('ticket_info', cxArrUser('registration_form'))}>
                <div className={cxTicket('input_ticket', cxLogin('input_password'))}>
                    <label htmlFor="ticket">Абонемент:</label>
                    <input type="text" id="ticket" disabled value={ticketVal.ticket_id} />
                </div>
                <div className={cxTicket('select')}>
                    <label htmlFor="select">Тариф:</label>
                    <input
                        type="text"
                        className={cxTicket('select_ticket')}
                        id="select"
                        disabled
                        value={ticketVal.ticket_rate}
                        onInput={(e) => e.preventDefault()}
                    />
                </div>
                <div className={cxTicket('input_datetime', 'input_datetime_start')}>
                    <label htmlFor="date">Начало:</label>
                    <input
                        type="date"
                        id="date"
                        disabled
                        defaultValue={ticketVal.start_period}
                        onInput={(e) => e.preventDefault()}
                    />
                </div>
                <div className={cxTicket('input_datetime', 'input_datetime_end')}>
                    <label htmlFor="date">Конец:</label>
                    <input
                        type="date"
                        id="date"
                        disabled
                        defaultValue={ticketVal.end_period}
                        onInput={(e) => e.preventDefault()}
                    />
                </div>
            </div>
        </>
    );
}
