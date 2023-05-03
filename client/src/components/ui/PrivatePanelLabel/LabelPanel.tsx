import React from 'react';
import ClassNames from 'classnames/bind';
import { ToastMessagesContainer } from '../../environments/ToastMessage';
import { Button } from '../Button';

import styles from '../../../pages/private/Panel/Panel.module.css';

type TLabelPanel = {
    link: string;
    children: string;
    backButton?: boolean;
};

export function LabelPanel({ link, children, backButton = true }: TLabelPanel) {
    const cx = ClassNames.bind(styles);
    return (
        <>
            <ToastMessagesContainer />
            {backButton && (
                <Button as={'a'} href={link} className={cx('BackButton')}>
                    Вернуться назад
                </Button>
            )}
            <h2 className={cx('page_title')}>{children}</h2>
        </>
    );
}
