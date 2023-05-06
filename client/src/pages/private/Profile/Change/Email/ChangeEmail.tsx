import { useAppDispatch } from '../../../../../store/ReduxHooks';
import ClassNames from 'classnames/bind';
import { Api } from '../../../../../core/Api';
import { insertUserData } from '../../../../../store/slices/AuthSlice';
import { Validation } from '../../../../../components/environments/Validation';
import {
    ToastMessage,
    ToastMessagesContainer,
} from '../../../../../components/environments/ToastMessage';

import styles from '../change.module.css';
import { ProfilePanel } from '../../../../../components/simple/ProfilePanel';
import { useRef, useState } from 'react';
import { Button } from '../../../../../components/ui/Button';
import { LabelPanel } from '../../../../../components/ui/PrivatePanelLabel/LabelPanel';
import { Spinner } from '../../../../../components/ui/Spinner';

export function ChangeEmail() {
    const cx = ClassNames.bind(styles);
    const session = JSON.parse(localStorage.getItem('Auth-Session')!);
    const dispatch = useAppDispatch();

    const [isLoading, setIsLoading] = useState(false);
    const [newEmail, setNewEmail] = useState('');
    const [oldEmail, setOldEmail] = useState(session.email || '');

    const newEmailInputRef = useRef(null);
    const oldEmailInputRef = useRef(null);

    const makeValidate = () => {
        if (!Validation.email(newEmail, newEmailInputRef)) return;
        if (!Validation.email(oldEmail, oldEmailInputRef)) return;

        makeQuery();
    };

    function makeQuery() {
        setIsLoading(true);

        Api.put(
            `/api/put/user?id=${session.id}&type=email`,
            { newEmail: newEmail, oldEmail: oldEmail },
            { withCredentials: true }
        )
            .then((data) => {
                ToastMessage.success(data.data.message);
                const newSession = { ...session, email: newEmail };
                localStorage.setItem('Auth-Session', JSON.stringify(newSession));
                dispatch(insertUserData(newSession));
            })
            .catch((e) => ToastMessage.error(e.response.data.message))
            .finally(() => setIsLoading(false));
    }

    return (
        <ProfilePanel>
            {isLoading && <Spinner />}
            <ToastMessagesContainer />
            <LabelPanel link={`/${session.id}/settings`}>Смена почты</LabelPanel>
            <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
                <div className={cx('inputs_wrapper')}>
                    <div className={cx('input_w')}>
                        <label htmlFor="old_pass">Старая почта</label>
                        <input
                            type="email"
                            id="old_pass"
                            placeholder="example@example.ex"
                            ref={oldEmailInputRef}
                            value={oldEmail}
                            onChange={(e) => setOldEmail(e.target.value)}
                        />
                    </div>
                    <div className={cx('input_w')}>
                        <label htmlFor="new_email">Новая почта</label>
                        <input
                            type="email"
                            id="new_email"
                            placeholder="example@example.ex"
                            ref={newEmailInputRef}
                            value={newEmail}
                            onChange={(e) => setNewEmail(e.target.value)}
                        />
                    </div>
                </div>
                <Button className={cx('change_button')} onClick={() => makeValidate()}>
                    Сохранить
                </Button>
            </form>
        </ProfilePanel>
    );
}
