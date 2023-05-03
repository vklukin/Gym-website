import ClassNames from 'classnames/bind';
import React, { SetStateAction } from 'react';

import styles from './modal.module.css';
import { Button } from '../../../ui/Button';
import { useAppDispatch } from '../../../../store/ReduxHooks';

import { logout } from '../../../../store/slices/AuthSlice';
import { useNavigate } from 'react-router-dom';

type TModalProps = {
    setExitModal: React.Dispatch<SetStateAction<boolean>>;
    setIsLoading: React.Dispatch<SetStateAction<boolean>>;
};

export function ExitModal({ setExitModal, setIsLoading }: TModalProps) {
    const cx = ClassNames.bind(styles);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const logoutFunc = () => {
        setIsLoading(true);
        dispatch(logout()).then(() => {
            setIsLoading(false);
            navigate('/authorization');
        });
    };

    return (
        <div className={cx('exit_modal')}>
            <div className={cx('exit_modal_bg')} onClick={() => setExitModal(false)}></div>
            <div className={cx('modal_wrapper')}>
                <h3>Вы точно хотите выйти?</h3>
                <div className={cx('exit_buttons_wrapper')}>
                    <Button
                        className={cx('true_exit_button', 'exit_button')}
                        onClick={() => logoutFunc()}
                    >
                        Выйти
                    </Button>
                    <Button
                        className={cx('false_exit_button', 'exit_button')}
                        onClick={() => setExitModal(false)}
                    >
                        Отменить
                    </Button>
                </div>
            </div>
        </div>
    );
}
