import React, { useEffect, useState } from 'react';
import ClassNames from 'classnames/bind';
import { Api } from '../../../../../core/Api';
import { ToastMessage } from '../../../../../components/environments/ToastMessage';

import styles from './soloTrainer.module.css';
import panelStyles from '../../Panel.module.css';
import trainerScheduleStyles from '../schedule/trainer-schedule.module.css';
import { TUserAndTrainer } from '../AddWorkout/AddWorkout';
import { TWorkoutsData } from '../schedule/TrainerSchedule';

import { Button } from '../../../../../components/ui/Button';
import { PrivatePanel } from '../../../../../components/simple/PrivatePanel';
import { LabelPanel } from '../../../../../components/ui/PrivatePanelLabel/LabelPanel';
import { Spinner } from '../../../../../components/ui/Spinner';

export function SoloTrainer() {
    const cx = ClassNames.bind(styles);
    const cxPanel = ClassNames.bind(panelStyles);
    const cxTrainerSchedule = ClassNames.bind(trainerScheduleStyles);

    const [isLoading, setIsLoading] = useState(false);
    const [trainersData, setTrainersData] = useState<TUserAndTrainer[]>([]);
    const [selectValue, setSelectValue] = useState('');
    const [workoutsData, setWorkoutsData] = useState<TWorkoutsData[]>([]);
    const [notActualWorkoutsData, setNotActualWorkoutData] = useState<TWorkoutsData[]>([]);

    useEffect(() => {
        const makeRequest = async () => {
            await Api.get('/api/get/trainers', {
                withCredentials: true,
            }).then((data) => {
                setTrainersData(data.data);
            });
        };

        makeRequest().finally(() => {
            setIsLoading(false);
        });
    }, []);

    const showTrainerSchedule = (trainer_id: number | string) => {
        setIsLoading(true);

        Api.get(`/api/get/workouts/${trainer_id}/actual`, { withCredentials: true })
            .then((data) => setWorkoutsData(data.data))
            .catch((e) => ToastMessage.error('Произошла ошибка с получением данных'))
            .finally(() => setIsLoading(false));

        Api.get(`/api/get/workouts/${trainer_id}/act`, { withCredentials: true })
            .then((data) => setNotActualWorkoutData(data.data))
            .catch((e) => ToastMessage.error('Произошла ошибка с получением данных'))
            .finally(() => setIsLoading(false));
    };

    const cancelRecord = async (id: number | string) => {
        setIsLoading(true);

        await Api.delete(`/api/delete/workout/${id}/`, {
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
            <LabelPanel link="/panel/trainer/schedule">Расписание одного тренера</LabelPanel>
            <form className={cx('form')}>
                <select className={cx('select')} onChange={(e) => setSelectValue(e.target.value)}>
                    <option value="0">Не выбрано</option>
                    {trainersData.length > 0 &&
                        trainersData.map((trainer, index) => (
                            <option value={trainer.id} key={index}>
                                {trainer.name}
                            </option>
                        ))}
                </select>
                <Button
                    className={cx('show_button')}
                    onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                        e.preventDefault();
                        showTrainerSchedule(selectValue);
                    }}
                >
                    Показать расписание
                </Button>
            </form>
            {workoutsData.length > 0 ? (
                <div className={cxTrainerSchedule('orders')}>
                    <h3 className={cxTrainerSchedule('orders_label')}>Активные записи</h3>
                    <table className={cxTrainerSchedule('table')}>
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
                                            className={cxTrainerSchedule('cancel_button')}
                                            onClick={() => {
                                                cancelRecord(record.id);
                                            }}
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
                <h3 className={cxPanel('page_hint', cx('hint'))}>
                    Предстоящих тренеровок на данный момент не найдено
                </h3>
            )}

            <div className={cxTrainerSchedule('orders')}>
                <h3 className={cxTrainerSchedule('orders_label')}>Прошедшие записи</h3>
                <table className={cxTrainerSchedule('table')}>
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
                        {notActualWorkoutsData.length > 0 &&
                            notActualWorkoutsData.map((record, recordIndex) => (
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
