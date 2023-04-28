import classNames from 'classnames/bind';
import React from 'react';

import styles from './navSideBar.module.css';

import { TUserParams } from '../../../../types/IUser';
import {
    AdminPanel,
    ModeratorPanel,
    TPrivateLinks,
    TrainerPanel,
} from '../../../environments/Links';
import { ROLES } from '../../../../core/constants';

const isActiveLink = (link: string) => window.location.pathname === link;

type TPrivateLinksNavigation = {
    mapState: TPrivateLinks[];
    allowedRoles: string[];
};

function PrivateLinksNavigation({ mapState, allowedRoles }: TPrivateLinksNavigation): JSX.Element {
    const auth: TUserParams = JSON.parse(window.localStorage.getItem('Auth-Session') as string);
    const cx = classNames.bind(styles);

    return (
        <ul className={styles.private_navigation}>
            {allowedRoles.includes(auth.role) &&
                mapState.map((mapItems, mapIndex) => (
                    <React.Fragment key={mapIndex}>
                        <li>
                            <a
                                href={mapItems.link}
                                className={cx({ active: isActiveLink(mapItems.link) })}
                            >
                                {mapItems.title}
                            </a>
                        </li>
                        {mapItems.subLinks &&
                            mapItems.subLinks.map((subLinkItem, subLinkIndex) => (
                                <li key={subLinkIndex + 5000} className={cx('subLink')}>
                                    <a
                                        href={subLinkItem.subLink}
                                        className={cx({
                                            active: isActiveLink(subLinkItem.subLink),
                                        })}
                                    >
                                        {subLinkItem.subTitle}
                                    </a>
                                </li>
                            ))}
                    </React.Fragment>
                ))}
        </ul>
    );
}

export function NavSideBar() {
    return (
        <aside className={styles.aside}>
            <PrivateLinksNavigation
                allowedRoles={[ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR]}
                mapState={TrainerPanel}
            />
            <PrivateLinksNavigation
                allowedRoles={[ROLES.ADMIN, ROLES.MODERATOR]}
                mapState={AdminPanel}
            />
            <PrivateLinksNavigation allowedRoles={[ROLES.MODERATOR]} mapState={ModeratorPanel} />
        </aside>
    );
}
