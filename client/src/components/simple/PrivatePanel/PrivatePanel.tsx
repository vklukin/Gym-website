import { ReactNode } from 'react';
import cx from 'classnames';

import styles from './privatePanel.module.css';

import { NavSideBar } from './sub-components/Nav_SideBar';

export type TPanelProps = {
    children: ReactNode | JSX.Element | JSX.Element[];
    className?: string[] | string;
};

export function PrivatePanel({ children, className }: TPanelProps): JSX.Element {
    return (
        <main className={cx(styles.private_panel, className)}>
            <NavSideBar />
            <div className={styles.content_wrapper}>{children}</div>
        </main>
    );
}
