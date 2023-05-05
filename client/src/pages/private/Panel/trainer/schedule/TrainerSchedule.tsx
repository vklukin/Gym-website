import React, { useEffect, useState } from 'react';
import ClassNames from 'classnames/bind';
import {
    ToastMessage,
    ToastMessagesContainer,
} from '../../../../../components/environments/ToastMessage';
import { Api } from '../../../../../core/Api';

import styles from './trainer-schedule.module.css';
import panelStyles from '../../Panel.module.css';

import { PrivatePanel } from '../../../../../components/simple/PrivatePanel';
import { Spinner } from '../../../../../components/ui/Spinner';
import { Button } from '../../../../../components/ui/Button';

export type TWorkoutsData = {
    id: string | number;
    trainer_name: string;
    user_name: string;
    workout_time: string;
    workout_price: number;
};

export function TrainerSchedule() {
    const cx = ClassNames.bind(styles);
    const cxPanel = ClassNames.bind(panelStyles);

    const [isLoading, setIsLoading] = useState(true);
    const [workoutsData, setWorkoutsData] = useState<TWorkoutsData[]>([]);
    const [expiredWorkoutsData, setExpiredWorkoutsData] = useState<TWorkoutsData[]>([]);

    useEffect(() => {
        const makeRequests = async () => {
            await Api.get('/api/get/workouts/not', {
                withCredentials: true,
            })
                .then((data) => {
                    setWorkoutsData(data.data);
                })
                .catch((e) => {
                    ToastMessage.error(
                        `Произошла ошибка с получением данных. ${e.response.message || ''}`
                    );
                });

            await Api.get('/api/get/workouts/expired', {
                withCredentials: true,
            })
                .then((data) => {
                    setExpiredWorkoutsData(data.data);
                })
                .catch((e) => {
                    ToastMessage.error(
                        `Произошла ошибка с получением данных. ${e.response.message || ''}`
                    );
                });
        };

        makeRequests().finally(() => {
            setIsLoading(false);
        });
    }, []);

    const cancelRecord = async (id: number | string) => {
        setIsLoading(true);

        await Api.delete(`/api/delete/workout/${id}`, {
            withCredentials: true,
        })
            .then((data) => {
                setWorkoutsData(data.data);
            })
            .catch((e) => {
                ToastMessage.error(`Произошла ошибка с получением данных`);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <PrivatePanel>
            {isLoading && <Spinner />}
            <ToastMessagesContainer />
            <Button as={'a'} href="/panel" className={cxPanel('BackButton')}>
                Вернуться назад
            </Button>
            <div className={cx('title_wrapper')}>
                <h2 className={cxPanel('page_title', cx('page_title'))}>Расписание тренера</h2>
                <Button as="a" href="/panel/admin/users/add" className={cx('reg_button')}>
                    Добавить запись
                </Button>
            </div>
            {workoutsData.length > 0 ? (
                <div className={cx('orders')}>
                    <h3 className={cx('orders_label')}>Активные записи</h3>
                    <table className={cx('table')}>
                        <thead>
                            <tr>
                                <th>№</th>
                                <th>ФИО тренера</th>
                                <th>ФИО клиента</th>
                                <th>Дата занятия</th>
                                <th>Цена</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {workoutsData.map((record, recordIndex) => (
                                <tr key={recordIndex}>
                                    <td>{record.id}</td>
                                    <td>{record.trainer_name}</td>
                                    <td>{record.user_name}</td>
                                    <td>{record.workout_time}</td>
                                    <td>{record.workout_price}&nbsp;&#8381;</td>
                                    <td>
                                        <Button
                                            className={cx('cancel_button')}
                                            onClick={() => cancelRecord(record.id)}
                                        >
                                            Отменить
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <h3 className={cxPanel('page_hint')}>
                    Предстоящих тренеровок на данный момент не найдено
                </h3>
            )}

            <div className={cx('orders')}>
                <h3 className={cx('orders_label')}>Прошедшие записи</h3>
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>№</th>
                            <th>ФИО тренера</th>
                            <th>ФИО клиента</th>
                            <th>Дата занятия</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {expiredWorkoutsData.length > 0 &&
                            expiredWorkoutsData.map((record, recordIndex) => (
                                <tr key={recordIndex}>
                                    <td>{record.id}</td>
                                    <td>{record.trainer_name}</td>
                                    <td>{record.user_name}</td>
                                    <td>{record.workout_time}</td>
                                    <td>{record.workout_price}&nbsp;&#8381;</td>
                                </tr>
                            ))}
                    </tbody>
                </table>
            </div>
        </PrivatePanel>
    );
}
