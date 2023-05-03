import ClassNames from 'classnames/bind';

import styles from '../PrivatePanel/privatePanel.module.css';
import { TPanelProps } from '../PrivatePanel';
import { NavSideBar } from './sub-components/Nav_sideBar';

export function ProfilePanel({ children, className, contentClassName }: TPanelProps) {
    const cx = ClassNames.bind(styles);

    return (
        <main className={cx('private_panel', className)}>
            <NavSideBar />
            <div className={cx('content_wrapper', contentClassName)}>{children}</div>
        </main>
    );
}
