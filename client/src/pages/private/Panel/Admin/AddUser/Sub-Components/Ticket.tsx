import React, { useEffect, useRef } from 'react';
import classNames from 'classnames/bind';

import styles from './ticket.module.css';
import stylesAddUser from '../add-user.module.css';
import loginStyles from '../../../../../public/Login/login.module.css';
import { TTicket } from '../AddUser';

function plusTime(time: string, nowDate: string) {
    const period = time.split(' ')[0];
    const periodAddTime = time.split(' ')[1];
    const date = new Date(nowDate);

    switch (period) {
        case 'day':
            date.setDate(date.getDate() + +periodAddTime);
            return `${date.getFullYear()}-${
                ((date.getMonth() + 1) / 10) | 0 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
            }-${(date.getDate() / 10) | 0 ? date.getDate() : '0' + date.getDate()}`;
        case 'month':
            date.setMonth(date.getMonth() + +periodAddTime);
            return `${date.getFullYear()}-${
                ((date.getMonth() + 1) / 10) | 0 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
            }-${(date.getDate() / 10) | 0 ? date.getDate() : '0' + date.getDate()}`;
        default:
            return '';
    }
}

export function Ticket({
    ticketVal,
    setTicket,
}: {
    ticketVal: TTicket;
    setTicket: React.Dispatch<React.SetStateAction<TTicket>>;
}) {
    const cx = classNames.bind(styles);
    const cxArrUser = classNames.bind(stylesAddUser);
    const cxLogin = classNames.bind(loginStyles);

    const selectRef = useRef<HTMLSelectElement>(null);

    const date = new Date();
    const initialDateValue = `${date.getFullYear()}-${
        ((date.getMonth() + 1) / 10) | 0 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    }-${(date.getDate() / 10) | 0 ? date.getDate() : '0' + date.getDate()}`;

    useEffect(() => {
        setTicket((prev) => ({
            ticket_id: prev.ticket_id || Date.now().toString(),
            ticket_rate: prev.ticket_rate,
            start_period: initialDateValue,
            end_period: prev.end_period,
            selectedIndex: prev.selectedIndex,
        }));

        selectRef!.current!.selectedIndex = ticketVal.selectedIndex;
    }, []);

    return (
        <>
            <div className={cx('ticket_info', cxArrUser('registration_form'))}>
                <div className={cx('input_ticket', cxLogin('input_password'))}>
                    <label htmlFor="ticket">Абонемент:</label>
                    <input type="text" id="ticket" disabled value={ticketVal.ticket_id} />
                </div>
                <div className={cx('select')}>
                    <label htmlFor="select">Тариф:</label>
                    <select
                        className={cx('select_ticket')}
                        id="select"
                        ref={selectRef}
                        onChange={(e) => {
                            setTicket((prev) => ({
                                ticket_id: prev.ticket_id,
                                ticket_rate: e.target.options[e.target.selectedIndex].innerText,
                                start_period: prev.start_period,
                                end_period:
                                    e.target.value === '0'
                                        ? ''
                                        : plusTime(e.target.value, prev.start_period),
                                selectedIndex: e.target.selectedIndex,
                            }));
                        }}
                    >
                        <option value="0" defaultChecked>
                            Не выбрано
                        </option>
                        <option value="day 1">Разовый безлимит 1 день</option>
                        <option value="day 1">Разовый ланч 1 день</option>
                        <option value="month 1">Безлимит 1 месяц</option>
                        <option value="month 3">Безлимит 3 месяца</option>
                        <option value="month 6">Безлимит 6 месяцев</option>
                        <option value="month 12">Дневная 12 месяцев</option>
                        <option value="month 6">1 + 1 "СПЛИТ" Безлимит 6 месяцев</option>
                        <option value="month 12">1 + 1 "СПЛИТ" Безлимит 12 месяцев</option>
                        <option value="month 1">Студентищеее Безлимит 1 месяц</option>
                        <option value="month 1">Студентищеее дневная 1 месяц</option>
                        <option value="month 12">Студентищеее безлимит 12 месяцев</option>
                    </select>
                </div>
                <div className={cx('input_datetime', 'input_datetime_start')}>
                    <label htmlFor="date">Начало:</label>
                    <input
                        type="date"
                        id="date"
                        min={initialDateValue}
                        defaultValue={ticketVal.start_period}
                        onChange={(e) => {
                            setTicket((prev) => ({
                                ticket_id: prev.ticket_id,
                                ticket_rate: prev.ticket_rate,
                                start_period: e.target.value,
                                end_period: plusTime(selectRef!.current!.value, e.target.value),
                                selectedIndex: prev.selectedIndex,
                            }));
                        }}
                        onInput={(e) => e.preventDefault()}
                    />
                </div>
                <div className={cx('input_datetime', 'input_datetime_end')}>
                    <label htmlFor="date">Конец:</label>
                    <input type="date" id="date" disabled defaultValue={ticketVal?.end_period} />
                </div>
            </div>
        </>
    );
}
