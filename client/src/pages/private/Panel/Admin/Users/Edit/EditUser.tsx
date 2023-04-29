import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import ClassNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../../../../store/ReduxHooks';
import { getUser } from '../../../../../../store/slices/GetUserSlice';
import { ToastMessage } from '../../../../../../components/environments/ToastMessage';
import { Status } from '../../../../../../core/constants';
import { TicketValidation, Validation } from '../../../../../../components/environments/Validation';
import { Api } from '../../../../../../core/Api';
import { LabelPanel } from '../../../../../../components/ui/PrivatePanelLabel/LabelPanel';

import panelStyles from '../../../Panel.module.css';
import addUserStyles from '../Add/add-user.module.css';
import loginStyles from '../../../../../public/Login/login.module.css';

import { PrivatePanel } from '../../../../../../components/simple/PrivatePanel';
import { Button } from '../../../../../../components/ui/Button';
import { Spinner } from '../../../../../../components/ui/Spinner';
import { Ticket } from '../Add/Sub-Components/Ticket';
import { TTicket } from '../Add/AddUser';
import { NonEditableTicket } from './Sub-Components/NonEditableTicket';

export function EditUser() {
    const cxPanel = ClassNames.bind(panelStyles);
    const cxAddUsers = ClassNames.bind(addUserStyles);
    const cxLogin = ClassNames.bind(loginStyles);

    const dispatch = useAppDispatch();
    const userData = useAppSelector((state) => state.GetUser.user);

    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(true);
    const [userName, setUserName] = useState(userData.name);
    const [userEmail, setEmailInput] = useState(userData.email);
    const [showTicket, setShowTicket] = useState(false);
    const [freezeUser, setFreezeUser] = useState(false);
    const [ticket, setTicket] = useState<TTicket>({
        ticket_id: 0,
        ticket_rate: '',
        start_period: '',
        end_period: '',
        selectedIndex: 0,
    });

    const userNameRef = useRef(null);
    const userEmailRef = useRef(null);

    useEffect(() => {
        if (id) {
            const userId: number = +id;
            dispatch(getUser({ userId })).finally(() => {
                setIsLoading(false);
            });
        }
    }, []);

    useEffect(() => {
        if (userData.id) {
            setUserName(userData.name);
            setEmailInput(userData.email);
            setFreezeUser(userData.status === Status.FREEZE);
        }
    }, [userData]);

    const makeValidate = () => {
        if (!Validation.isInputEmpty(userName, userNameRef)) return;
        if (!Validation.email(userEmail, userEmailRef)) return;
        if (showTicket) {
            if (!TicketValidation.ticketValue(ticket)) return;
        }

        makeRequest();
    };

    const makeRequest = () => {
        setIsLoading(true);

        const payload = {
            userName: userName,
            userEmail: userEmail,
            ticket: !userData.ticket && showTicket ? ticket : undefined,
            freezeUser: freezeUser,
        };

        Api.put(`/api/put/users/${userData.id}`, payload, {
            withCredentials: true,
        })
            .then(() => {
                ToastMessage.success('Изменения успешно применены!');
            })
            .catch((e) => {
                console.log(e);
                ToastMessage.error(
                    `Произошла ошибка в изменении. ${e.response.data.message || ''}`
                );
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <PrivatePanel>
            {isLoading && <Spinner />}
            <LabelPanel link="/panel/admin/users">Редактирование клиента</LabelPanel>
            {userData.id ? (
                <>
                    <form className={cxAddUsers('registration_form')}>
                        <div className={cxAddUsers('user_info', cxLogin('inputs'))}>
                            <div className={cxAddUsers('input_name', cxLogin('input_password'))}>
                                <label htmlFor="name">ФИО:</label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder="Иван Иванов Иванович"
                                    value={userName}
                                    ref={userNameRef}
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </div>
                            <div className={cxLogin('input_email')}>
                                <label htmlFor="email">E-mail:</label>
                                <input
                                    type="email"
                                    id="email"
                                    placeholder="example@example.ex"
                                    value={userEmail}
                                    ref={userEmailRef}
                                    onChange={(e) => setEmailInput(e.target.value)}
                                />
                            </div>
                        </div>
                        <fieldset className={cxAddUsers('options')}>
                            <legend className={cxAddUsers('legend')}>Опции</legend>
                            {!userData.ticket && (
                                <div className={cxAddUsers('checkbox_wrapper')}>
                                    <input
                                        type="checkbox"
                                        id="userPasswordInput"
                                        onClick={() => setShowTicket((prev) => !prev)}
                                    />
                                    <label htmlFor="userPasswordInput">Добавить абонемент</label>
                                </div>
                            )}
                            <div className={cxAddUsers('checkbox_wrapper')}>
                                <input
                                    type="checkbox"
                                    id="freezeUser"
                                    checked={freezeUser}
                                    onClick={() => setFreezeUser((prev) => !prev)}
                                />
                                <label htmlFor="freezeUser">Заморозить пользователя</label>
                            </div>
                        </fieldset>
                        {!userData.ticket && showTicket && (
                            <Ticket ticketVal={ticket} setTicket={setTicket} />
                        )}
                        {userData.ticket && <NonEditableTicket ticketVal={userData.ticket} />}
                    </form>
                    <Button className={cxAddUsers('reg_button')} onClick={makeValidate}>
                        Сохранить изменения
                    </Button>
                </>
            ) : (
                <h3 className={cxPanel('page_hint')}>Пользователь не найден</h3>
            )}
        </PrivatePanel>
    );
}
