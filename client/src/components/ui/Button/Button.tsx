import { ComponentProps, ElementType } from 'react';
import classNames from 'classnames/bind';

import styles from './Button.module.css';

type TButtonOwnProps<E extends ElementType = ElementType> = {
    children: string;
    className?: string | string[];
    as?: E;
};

type TButtonProps<E extends ElementType> = TButtonOwnProps<E> &
    Omit<ComponentProps<E>, keyof TButtonOwnProps>;

const defaultElement = 'button';

export function Button<E extends ElementType = typeof defaultElement>({
    children,
    className,
    as,
    ...otherProps
}: TButtonProps<E>) {
    const TagName = as || defaultElement;
    const cx = classNames.bind(styles);
    return (
        <TagName className={cx('anchor-button', className)} {...otherProps}>
            {children}
        </TagName>
    );
}
