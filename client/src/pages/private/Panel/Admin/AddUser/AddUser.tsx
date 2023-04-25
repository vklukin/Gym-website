import classNames from 'classnames/bind';
import React, { useRef, useState } from 'react';

import styles from './add-user.module.css';
import loginStyles from '../../../../public/Login/login.module.css';

import { PrivatePanel } from '../../../../../components/simple/PrivatePanel';
import { Button } from '../../../../../components/ui/Button';
import { Ticket } from './Sub-Components/Ticket';
import { TicketValidation, Validation } from '../../../../../components/environments/Validation';
import {
    ToastMessage,
    ToastMessagesContainer,
} from '../../../../../components/environments/ToastMessage';
import { Api } from '../../../../../core/Api';
import { Spinner } from '../../../../../components/ui/Spinner';

export type TTicket = {
    ticket_id: string | number;
    ticket_rate: string;
    start_period: string;
    end_period: string;
    selectedIndex: number;
};

export function AddUser() {
    const cx = classNames.bind(styles);
    const cxLogin = classNames.bind(loginStyles);

    const userInputRef = useRef<HTMLInputElement>(null);
    const userPasswordRef = useRef<HTMLInputElement>(null);
    const emailInputRef = useRef<HTMLInputElement>(null);

    const [isLoading, setIsLoading] = useState(false);
    const [userName, setUserName] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [userPassword, setUserPassword] = useState(Math.random().toString(36).slice(-10));
    const [showTicket, setShowTicket] = useState(false);
    const [ticket, setTicket] = useState<TTicket>({
        ticket_id: '',
        ticket_rate: '',
        start_period: '',
        end_period: '',
        selectedIndex: 0,
    });

    const makeValidation = () => {
        if (!Validation.isInputEmpty(userName, userInputRef)) return;
        if (!Validation.email(emailInput, emailInputRef)) return;
        if (!Validation.password(userPassword, userPasswordRef)) return;
        if (showTicket) {
            if (!TicketValidation.ticketValue(ticket)) return;
        }

        makeRegRequest();
    };

    const makeRegRequest = () => {
        setIsLoading(true);

        const payload = {
            userName: userName,
            userEmail: emailInput,
            userPassword: userPassword,
            ticket: showTicket
                ? {
                      ticket_id: ticket.ticket_id,
                      ticket_rate: ticket.ticket_rate,
                      start_period: ticket.start_period,
                      end_period: ticket.end_period,
                  }
                : null,
        };

        Api.post('/api/post/auth/registration', payload, {
            withCredentials: true,
        })
            .then(() => ToastMessage.success('Пользователь успешно зарегистрирован!'))
            .catch((e) => ToastMessage.error('Произошла ошибка в регистрации: ' + e))
            .finally(() => setIsLoading(false));
    };

    return (
        <PrivatePanel>
            {isLoading && <Spinner />}
            <ToastMessagesContainer />
            <Button as={'a'} className={cx('BackButton')}>
                Вернуться назад
            </Button>
            <h2 className={cx('page_title')}>Регистрация клиента</h2>
            <form className={cx('registration_form')}>
                <div className={cx('user_info', loginStyles.inputs)}>
                    <div className={cx('input_name', cxLogin('input_password'))}>
                        <label htmlFor="name">ФИО:</label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Иван Иванов Иванович"
                            value={userName}
                            ref={userInputRef}
                            onChange={(e) => setUserName(e.target.value)}
                        />
                    </div>
                    <div className={cxLogin('input_email')}>
                        <label htmlFor="email">E-mail:</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.ex"
                            value={emailInput}
                            ref={emailInputRef}
                            onChange={(e) => setEmailInput(e.target.value)}
                        />
                    </div>
                    <div className={cx('input_password', cxLogin('input_password'))}>
                        <label htmlFor="password">
                            Пароль: <span className={cx('input_hint')}>Не менее 8-ми символов</span>
                        </label>
                        <input
                            type="text"
                            id="password"
                            disabled
                            ref={userPasswordRef}
                            value={userPassword}
                            onChange={(e) => {
                                setUserPassword(e.target.value);
                            }}
                        />
                    </div>
                </div>
                <fieldset className={cx('options')}>
                    <legend className={cx('legend')}>Опции</legend>
                    <div className={cx('checkbox_wrapper')}>
                        <input
                            type="checkbox"
                            id="ticket"
                            onClick={() => {
                                if (userPasswordRef.current) {
                                    userPasswordRef.current.disabled =
                                        !userPasswordRef.current.hasAttribute('disabled');
                                }
                            }}
                        />
                        <label htmlFor="ticket">Изменить пароль</label>
                    </div>
                    <div className={cx('checkbox_wrapper')}>
                        <input
                            type="checkbox"
                            id="userPasswordInput"
                            onClick={() => setShowTicket((prev) => !prev)}
                        />
                        <label htmlFor="userPasswordInput">Добавить абонемент</label>
                    </div>
                </fieldset>
                {showTicket && <Ticket ticketVal={ticket} setTicket={setTicket} />}
            </form>
            <Button className={cx('reg_button')} onClick={makeValidation}>
                Зарегистрировать
            </Button>
        </PrivatePanel>
    );
}
