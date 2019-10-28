import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './button.scss';
import { Props } from './props';

export const Button: FC<Props> = ({
    text,
    type = 'button',
    className,
    onClick
}: Props) => {
    const resultClass = classNames(className, styles.button);
    return (
        // eslint-disable-next-line react/button-has-type
        <button
            className={resultClass}
            onClick={onClick}
            type={type}
            data-button="login-page__button-login"
        >
            {text}
        </button>
    );
};
