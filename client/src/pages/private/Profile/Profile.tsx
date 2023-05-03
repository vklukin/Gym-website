import { useEffect, useState } from 'react';
import ClassNames from 'classnames/bind';
import { useAppSelector } from '../../../store/ReduxHooks';
import { roleInRus, statusInRus } from '../../../core/constants';

import styles from './profile.module.css';
import { Spinner } from '../../../components/ui/Spinner';
import { ProfilePanel } from '../../../components/simple/ProfilePanel';
import { LabelPanel } from '../../../components/ui/PrivatePanelLabel/LabelPanel';
import { Button } from '../../../components/ui/Button';
import { ExitModal } from '../../../components/simple/Profile/modalForExit';

export function Profile() {
    const cx = ClassNames.bind(styles);
    const auth = useAppSelector((state) => state.Auth.user);

    const [isLoading, setIsLoading] = useState(true);
    const [showExitModal, setShowExitModal] = useState(false);

    useEffect(() => {
        if (auth.isAuth) {
            setIsLoading(false);
        }
    }, [auth]);

    useEffect(() => {
        if (showExitModal) {
            document.querySelector('html')!.classList.add(cx('hideOverflow'));
        } else {
            document.querySelector('html')!.classList.remove(cx('hideOverflow'));
        }
    }, [showExitModal]);

    return (
        <>
            {showExitModal && (
                <ExitModal setIsLoading={setIsLoading} setExitModal={setShowExitModal} />
            )}
            <ProfilePanel>
                {isLoading && <Spinner />}
                <LabelPanel backButton={false} link="#">
                    Профиль
                </LabelPanel>
                <div className={cx('user_info__wrapper')}>
                    <div className={cx('user_info')}>
                        <h4 className={cx('user_role')}>{roleInRus(auth.role)}</h4>
                        <div className={cx('info_item')}>
                            <h4>ФИО:&nbsp;</h4>
                            <p>{auth.name}</p>
                        </div>
                        <div className={cx('info_item')}>
                            <h4>Почта:&nbsp;</h4>
                            <p>{auth.email}</p>
                        </div>
                        <div className={cx('info_item')}>
                            <h4>Аккаунт создан:&nbsp;</h4>
                            <p>{auth.createAt}</p>
                        </div>
                        <div className={cx('info_item')}>
                            <h4>Статус абонемента:&nbsp;</h4>
                            <p>{statusInRus(auth.status)}</p>
                        </div>
                    </div>
                    {auth.ticket && (
                        <div className={cx('info_item', 'ticket_info')}>
                            <h4>Абонемент:&nbsp;</h4>
                            <p>
                                Тариф: <span>{auth.ticket.ticket_rate}</span>
                            </p>
                            <p>
                                Начало абонемента: <span>{auth.ticket.start_period}</span>
                            </p>
                            <p>
                                Конец абонемента: <span>{auth.ticket.end_period}</span>
                            </p>
                        </div>
                    )}
                    <Button className={cx('exit_button')} onClick={() => setShowExitModal(true)}>
                        Выйти
                    </Button>
                </div>
            </ProfilePanel>
        </>
    );
}
