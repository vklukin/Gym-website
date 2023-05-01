import React, { useEffect, useRef, useState } from 'react';
import ClassNames from 'classnames/bind';
import { Api } from '../../../../../core/Api';

import styles from './add-workout.module.css';

import { PrivatePanel } from '../../../../../components/simple/PrivatePanel';
import { LabelPanel } from '../../../../../components/ui/PrivatePanelLabel/LabelPanel';
import { Button } from '../../../../../components/ui/Button';
import { Spinner } from '../../../../../components/ui/Spinner';
import { UserDataList } from './Sub-Components/UserData_list';
import { Validation } from '../../../../../components/environments/Validation';
import { ToastMessage } from '../../../../../components/environments/ToastMessage';

export type TUserAndTrainer = {
    id: number;
    name: string;
};

export function AddWorkout() {
    const cx = ClassNames.bind(styles);
    let timeout: string | number | NodeJS.Timeout | undefined;

    const date = new Date();
    const initialDate = `${date.getFullYear()}-${
        ((date.getMonth() + 1) / 10) | 0 ? date.getMonth() + 1 : '0' + (date.getMonth() + 1)
    }-${
        (date.getDate() / 10) | 0 ? date.getDate() : '0' + date.getDate()
    }T${date.getHours()}:${date.getMinutes()}:00`;

    const [isLoading, setIsLoading] = useState(true);
    const [searchUser, setSearchUser] = useState<TUserAndTrainer | string>('');
    const [trainersData, setTrainersData] = useState<TUserAndTrainer[]>([]);
    const [usersData, setUsersData] = useState<TUserAndTrainer[]>([]);
    const [hideSearchList, setHideSearchList] = useState(true);
    const [recordDate, setRecordDate] = useState(initialDate);
    const [recordPrice, setRecordPrice] = useState('');
    const [trainerValue, setTrainerValue] = useState('0');

    const trainerInputRef = useRef(null);
    const clientInputRef = useRef(null);
    const priceInputRef = useRef(null);

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

    useEffect(() => {
        const makeRequest = async () => {
            await Api.get(`/api/get/users-for-trainers/${searchUser || '_'}`, {
                withCredentials: true,
            }).then((data) => {
                setUsersData(data.data);
            });
        };

        timeout = setTimeout(() => makeRequest(), 1000);
    }, [searchUser]);

    const makeValidate = () => {
        if (
            !Validation.select(+trainerValue, trainerInputRef) ||
            !Validation.isInputEmpty(
                typeof searchUser === 'string' ? searchUser : searchUser.name,
                clientInputRef
            ) ||
            !Validation.isInputEmpty(recordPrice, priceInputRef)
        )
            return;

        makeRecord();
    };

    const makeRecord = async () => {
        setIsLoading(true);
        await Api.post(
            '/api/post/add-record',
            {
                trainer_id: trainerValue,
                user_id: typeof searchUser === 'object' ? searchUser.id : null,
                user_name: typeof searchUser === 'string' ? searchUser : searchUser.name,
                datetime: recordDate,
                price: recordPrice,
            },
            { withCredentials: true }
        )
            .then((data) => {
                ToastMessage.success('Запись успешно добавлена!');
            })
            .catch((e) => {
                ToastMessage.error('Произошла ошибка');
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    return (
        <PrivatePanel>
            {isLoading && <Spinner />}
            <LabelPanel link="/panel/trainer/schedule">Добавить тренеровку</LabelPanel>
            {!hideSearchList && (
                <div className={cx('close_search')} onClick={() => setHideSearchList(true)}></div>
            )}
            <form className={cx('form')}>
                <div className={cx('inputs', 'users_info')}>
                    <div className={cx('input_wrapper', 'trainers_select__wrapper')}>
                        <label htmlFor="trainers_select">Тренер:</label>
                        <select
                            id="trainers_select"
                            className={cx('trainers_select')}
                            ref={trainerInputRef}
                            defaultValue={trainerValue}
                            onFocus={() => setHideSearchList(true)}
                            onChange={(e) => setTrainerValue(e.target.value)}
                        >
                            <option value="0">Не выбрано</option>
                            {trainersData.map((trainer, trainerIndex) => (
                                <option key={trainerIndex} value={trainer.id}>
                                    {trainer.name}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div className={cx('input_wrapper', 'client_input__wrapper')}>
                        <label htmlFor="client_input">Клиент:</label>
                        <input
                            type="text"
                            id="client_input"
                            placeholder="Иванов Иван Иванович"
                            ref={clientInputRef}
                            value={typeof searchUser === 'string' ? searchUser : searchUser.name}
                            autoComplete={'off'}
                            onChange={(e) => {
                                clearTimeout(timeout);
                                setSearchUser(e.target.value);
                            }}
                            onFocus={() => {
                                setHideSearchList(false);
                            }}
                        />
                        {!hideSearchList && (
                            <UserDataList
                                usersData={usersData}
                                setSearchUser={setSearchUser}
                                searchUser={searchUser}
                                setHideSearchList={setHideSearchList}
                            />
                        )}
                    </div>
                </div>
                <div className={cx('inputs', 'info_inputs')}>
                    <div className={cx('input_wrapper', 'record_date__wrapper')}>
                        <label htmlFor="record_date">Дата:</label>
                        <input
                            type="datetime-local"
                            id="record_date"
                            min={initialDate}
                            defaultValue={recordDate}
                            onChange={(e) => setRecordDate(e.target.value)}
                        />
                    </div>
                    <div className={cx('input_wrapper', 'record_date__wrapper')}>
                        <label htmlFor="record_price">Цена:</label>
                        <input
                            type="number"
                            id="record_price"
                            placeholder="0"
                            ref={priceInputRef}
                            value={recordPrice}
                            onChange={(e) => setRecordPrice(e.target.value)}
                        />
                    </div>
                </div>
            </form>
            <Button
                className={cx('reg_button')}
                onClick={() => {
                    if (!hideSearchList) setHideSearchList(true);
                    makeValidate();
                }}
            >
                Добавить запись
            </Button>
        </PrivatePanel>
    );
}
