import ClassNames from 'classnames/bind';
import { Api } from '../../../../core/Api';
import React, { useEffect, useState } from 'react';

import styles from './workouts_history.module.css';
import panelStyles from '../../Panel/Panel.module.css';

import { ProfilePanel } from '../../../../components/simple/ProfilePanel';
import { Spinner } from '../../../../components/ui/Spinner';
import { LabelPanel } from '../../../../components/ui/PrivatePanelLabel/LabelPanel';

type TWorkoutsHistoryData = {
    trainer_name: string;
    workout_time: string;
    workout_price: number;
};

export function WorkoutsHistory() {
    const cx = ClassNames.bind(styles);
    const cxPanel = ClassNames.bind(panelStyles);

    const [isLoading, setIsLoading] = useState(false);
    const [workoutsData, setWorkoutsData] = useState<TWorkoutsHistoryData[]>([]);

    const session = JSON.parse(localStorage.getItem('Auth-Session')!);

    useEffect(() => {
        Api.get(`/api/get/workouts/user?u=${session.id}&sort=history`, {
            withCredentials: true,
        })
            .then((data) => setWorkoutsData(data.data))
            .finally(() => setIsLoading(false));
    }, []);

    return (
        <ProfilePanel>
            {isLoading && <Spinner />}
            <LabelPanel link={`/${session.id}/profile`}>История тренеровок</LabelPanel>
            {workoutsData.length > 0 ? (
                <table className={cx('table')}>
                    <thead>
                        <tr>
                            <th>ФИО тренера</th>
                            <th>Дата занятия</th>
                            <th>Цена</th>
                        </tr>
                    </thead>
                    <tbody>
                        {workoutsData.map((record, index) => (
                            <tr key={index}>
                                <td>{record.trainer_name}</td>
                                <td>{record.workout_time}</td>
                                <td>{record.workout_price}&nbsp;&#8381;</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <h3 className={cxPanel('page_hint')}>Тренеровок не найдено</h3>
            )}
        </ProfilePanel>
    );
}
