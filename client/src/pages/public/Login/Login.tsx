import React, { useRef, useState } from 'react';

import styles from './login.module.css';

import { MainTag } from '../../../components/ui/Main-Tag';
import { Button } from '../../../components/ui/Button';
import { Validation } from '../../../components/environments/Validation';
import { MessagesContainer } from '../../../components/environments/ToastMessage/MessagesContainer';

export function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const emailInputRef = useRef<HTMLInputElement>(null);
    const passwordInputRef = useRef<HTMLInputElement>(null);

    const ValidateFunc = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();

        if (!Validation.email(email, emailInputRef)) return;
        if (!Validation.password(password, passwordInputRef)) return;
    };

    const HandleAuth = async () => {};

    return (
        <MainTag navigation={false} container={false} className={styles.login}>
            <MessagesContainer positionY={'bottom'} positionX={'center'} />
            <form className={styles.form}>
                <h1>Вход</h1>
                <div className={styles.inputs}>
                    <div className={styles.input_email}>
                        <label htmlFor="email">Почта</label>
                        <input
                            type="email"
                            id="email"
                            placeholder="example@example.com"
                            ref={emailInputRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className={styles.input_password}>
                        <div className={styles.inputInfo}>
                            <label htmlFor="password">Пароль</label>
                            <p
                                className={styles.showPasswordButton}
                                onClick={() => setShowPassword((prevState) => !prevState)}
                            >
                                {!showPassword ? 'Показать пароль' : 'Скрыть пароль'}
                            </p>
                        </div>
                        <input
                            type={!showPassword ? 'password' : 'text'}
                            id="password"
                            placeholder="********"
                            ref={passwordInputRef}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button type="submit" className={styles.auth_button} onClick={ValidateFunc}>
                    Войти
                </Button>
            </form>
        </MainTag>
    );
}
