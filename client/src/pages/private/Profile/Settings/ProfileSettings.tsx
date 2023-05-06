import ClassNames from 'classnames/bind';

import styles from './profile-settings.module.css';
import { ProfilePanel } from '../../../../components/simple/ProfilePanel';
import { LabelPanel } from '../../../../components/ui/PrivatePanelLabel/LabelPanel';
import { Button } from '../../../../components/ui/Button';

export function ProfileSettings() {
    const cx = ClassNames.bind(styles);
    const session = JSON.parse(localStorage.getItem('Auth-Session')!);

    return (
        <ProfilePanel>
            <LabelPanel link={`/${session.id}/profile`}>Нстройки</LabelPanel>
            <ul className={cx('change_props__list')}>
                <li>
                    <Button as="a" href={`/${session.id}/change/email`}>
                        Сменить email
                    </Button>
                </li>
                <li>
                    <Button as="a" href={`/${session.id}/change/password`}>
                        Сменить пароль
                    </Button>
                </li>
            </ul>
        </ProfilePanel>
    );
}
