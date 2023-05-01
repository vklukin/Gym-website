import React from 'react';
import { TUserAndTrainer } from '../AddWorkout';
import ClassNames from 'classnames/bind';

import styles from './userData.module.css';

type TUserDataList = {
    usersData: TUserAndTrainer[];
    setHideSearchList: React.Dispatch<React.SetStateAction<boolean>>;
    searchUser: TUserAndTrainer | string;
    setSearchUser: React.Dispatch<React.SetStateAction<TUserAndTrainer | string>>;
};

export function UserDataList({
    usersData,
    setHideSearchList,
    searchUser,
    setSearchUser,
}: TUserDataList) {
    const cx = ClassNames.bind(styles);
    return (
        <ul className={cx('search_list')}>
            {usersData.length !== 0 ? (
                <>
                    {usersData.map((user, userIndex) => (
                        <li key={userIndex}>
                            <div
                                className={cx('li_click')}
                                data-user-id={user.id}
                                onClick={(e) => {
                                    handleSearchItem(e, setHideSearchList, setSearchUser);
                                }}
                            >
                                {user.name}
                            </div>
                        </li>
                    ))}
                </>
            ) : (
                <li>
                    <div
                        className={cx('li_click')}
                        onClick={(e) => {
                            handleSearchItem(e, setHideSearchList, setSearchUser);
                        }}
                    >
                        {typeof searchUser === 'string' ? searchUser : searchUser.name}
                    </div>
                </li>
            )}
        </ul>
    );
}

function handleSearchItem(
    target: React.MouseEvent<HTMLDivElement, MouseEvent>,
    setHideSearchList: React.Dispatch<React.SetStateAction<boolean>>,
    setValue: React.Dispatch<React.SetStateAction<TUserAndTrainer | string>>
) {
    if (target.currentTarget.dataset.userId) {
        setValue({
            id: +target.currentTarget.dataset.userId,
            name: target.currentTarget.innerText,
        });
    } else {
        setValue(target.currentTarget.innerText);
    }
    setHideSearchList(true);
}
