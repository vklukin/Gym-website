import { ReactNode } from 'react';
import classNames from 'classnames/bind';

import styles from './privatePanel.module.css';

import { NavSideBar } from './sub-components/Nav_SideBar';

export type TPanelProps = {
    children: ReactNode | JSX.Element | JSX.Element[];
    className?: string[] | string;
    contentClassName?: string[] | string;
};

export function PrivatePanel({ children, className, contentClassName }: TPanelProps): JSX.Element {
    const cx = classNames.bind(styles);

    return (
        <main className={cx('private_panel', className)}>
            <NavSideBar />
            <div className={cx('content_wrapper', contentClassName)}>{children}</div>
        </main>
    );
}
