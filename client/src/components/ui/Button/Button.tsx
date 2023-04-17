import './Button.css';
import { ComponentProps, ElementType } from 'react';

type TButtonOwnProps<E extends ElementType = ElementType> = {
    children: string;
    className?: string;
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
    return (
        <TagName className={`anchor-button ${className}`} {...otherProps}>
            {children}
        </TagName>
    );
}
