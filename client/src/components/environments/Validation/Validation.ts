import React from 'react';

import { ToastMessage } from '../ToastMessage';

type TPasswordValidate = (
    passwordInput: string,
    passwordInputRef: React.RefObject<HTMLInputElement>
) => boolean;

type TEmailValidate = (
    emailInput: string,
    emailInputRef: React.RefObject<HTMLInputElement>
) => boolean;

type TIsInputEmpty = (
    inputValue: string,
    inputValueRef: React.RefObject<HTMLInputElement>
) => boolean;

export class Validation {
    static password: TPasswordValidate = (passwordInput, passwordInputRef) => {
        if (passwordInput.trim().length === 0) {
            passwordInputRef.current?.classList.add('rejectInput');
            ToastMessage.error('Поле для пароля не должно быть пустым!');
            return false;
        }

        if (passwordInput.length <= 7) {
            passwordInputRef.current?.classList.add('rejectInput');
            ToastMessage.error('Пароль должен состоять не менее чем из 8-ми символов!');
            return false;
        }

        passwordInputRef.current?.classList.remove('rejectInput');
        return true;
    };

    static email: TEmailValidate = (emailInput, emailInputRef) => {
        const validEmail = new RegExp(/^[a-zA-Z0-9.!_-]+@[a-zA-Z0-9-]+\.[a-zA-Z]+$/);

        if (emailInput.trim().length === 0) {
            emailInputRef.current?.classList.add('rejectInput');
            ToastMessage.error('Поле для почты не должно быть пустым!');
            return false;
        }

        if (!validEmail.test(emailInput)) {
            emailInputRef.current?.classList.add('rejectInput');
            ToastMessage.error('Вы ввели не правильно почту!');
            return false;
        }

        emailInputRef.current?.classList.remove('rejectInput');
        return true;
    };

    static isInputEmpty: TIsInputEmpty = (inputValue, inputValueRef) => {
        if (inputValue.trim().length === 0) {
            inputValueRef.current?.classList.add('rejectInput');
            ToastMessage.error('Поле не должно быть пустым!');
            return false;
        }

        inputValueRef.current?.classList.remove('rejectInput');
        return true;
    };
}
