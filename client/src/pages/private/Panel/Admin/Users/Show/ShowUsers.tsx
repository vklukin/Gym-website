import ClassNames from 'classnames/bind';
import { useAppDispatch, useAppSelector } from '../../../../../../store/ReduxHooks';
import React, { useEffect, useState } from 'react';

import styles from './ShowUsers.module.css';
import panelStyles from '../../../Panel.module.css';

import { PrivatePanel } from '../../../../../../components/simple/PrivatePanel';
import { Spinner } from '../../../../../../components/ui/Spinner';
import { getUsers } from '../../../../../../store/slices/GetAllUsersSlice';
import { Table } from './Sub-Components/Table';
import { Button } from '../../../../../../components/ui/Button';

export function ShowUsers() {
    const cx = ClassNames.bind(styles);
    const cxPanel = ClassNames.bind(panelStyles);

    const dispatch = useAppDispatch();
    const usersData = useAppSelector((state) => state.GetAllUsers.users);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        dispatch(getUsers()).finally(() => {
            setIsLoading(false);
        });
    }, []);

    return (
        <PrivatePanel>
            <Button as={'a'} href="/panel" className={cxPanel('BackButton')}>
                Вернуться назад
            </Button>
            <div className={cx('title_wrapper')}>
                <h2 className={cxPanel('page_title', cx('page_title'))}>
                    Управление пользователями
                </h2>
                <Button as="a" href="/panel/admin/users/add" className={cx('reg_button')}>
                    Зарегистрировать клиента
                </Button>
            </div>
            {isLoading && <Spinner />}
            {!usersData ? (
                <h3 className={cxPanel('page_hint')}>Пользователей не найдено</h3>
            ) : (
                <Table data={usersData} />
            )}
        </PrivatePanel>
    );
}
