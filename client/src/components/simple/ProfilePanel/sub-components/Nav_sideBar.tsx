import React from 'react';

import styles from '../../PrivatePanel/sub-components/navSideBar.module.css';
import { ROLES } from '../../../../core/constants';
import { PrivateLinksNavigation } from '../../PrivatePanel/sub-components/Nav_SideBar';
import { ProfileLinks } from '../../../environments/Links/ProfileLinks';

export function NavSideBar() {
    return (
        <aside className={styles.aside}>
            <PrivateLinksNavigation
                allowedRoles={[ROLES.USER, ROLES.TRAINER, ROLES.ADMIN, ROLES.MODERATOR]}
                mapState={ProfileLinks}
            />
        </aside>
    );
}
