import ClassNames from 'classnames/bind';
import { Api } from '../../../../../core/Api';
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

export function ChangePassword() {
    const cx = ClassNames.bind(styles);
    const session = JSON.parse(localStorage.getItem('Auth-Session')!);

    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [oldPass, setOldPass] = useState('');
    const [firPass, setFirPass] = useState('');
    const [secPass, setSecPass] = useState('');

    const oldPassRef = useRef(null);
    const firPassRef = useRef(null);
    const secPassRef = useRef(null);

    const makeValidate = () => {
        if (!Validation.password(oldPass, oldPassRef)) return;
        if (!Validation.password(firPass, firPassRef)) return;
        if (!Validation.password(secPass, secPassRef)) return;
        if (firPass !== secPass) return ToastMessage.error('Пароли не совпадают!');

        makeQuery();
    };

    function makeQuery() {
        setIsLoading(true);

        Api.put(
            `/api/put/user?id=${session.id}&type=password`,
            { newPassword: firPass, oldPassword: oldPass },
            { withCredentials: true }
        )
            .then((data) => ToastMessage.success(data.data.message))
            .catch((e) => ToastMessage.error(e.response.data.message))
            .finally(() => setIsLoading(false));
    }

    return (
        <ProfilePanel>
            {isLoading && <Spinner />}
            <ToastMessagesContainer />
            <LabelPanel link={`/${session.id}/settings`}>Смена пароля</LabelPanel>
            <form className={cx('form')} onSubmit={(e) => e.preventDefault()}>
                <div className={cx('inputs_wrapper')}>
                    <div className={cx('input_w')}>
                        <label htmlFor="old_pass">Старый пароль</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="old_pass"
                            placeholder="********"
                            ref={oldPassRef}
                            value={oldPass}
                            onChange={(e) => setOldPass(e.target.value)}
                        />
                    </div>
                    <div className={cx('input_w')}>
                        <label htmlFor="new_first_pass">Новый пароль</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="new_first_pass"
                            placeholder="********"
                            ref={firPassRef}
                            value={firPass}
                            onChange={(e) => setFirPass(e.target.value)}
                        />
                    </div>
                    <div className={cx('input_w')}>
                        <label htmlFor="new_second_pass">Повторите новый пароль</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="new_second_pass"
                            placeholder="********"
                            ref={secPassRef}
                            value={secPass}
                            onChange={(e) => setSecPass(e.target.value)}
                        />
                    </div>
                </div>
                <div className={cx('show_password_checkbox')}>
                    <input
                        type="checkbox"
                        id="show_pass"
                        onChange={() => setShowPassword((prev) => !prev)}
                    />
                    <label htmlFor="show_pass">Показать пароли</label>
                </div>
                <Button className={cx('change_button')} onClick={() => makeValidate()}>
                    Сохранить
                </Button>
            </form>
        </ProfilePanel>
    );
}
