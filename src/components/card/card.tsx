import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import styles from './card.module.scss';

type Props = CardType & {
    className: string;
    duration: string;
    price: string;
};

interface CardContainerProps {
    children: ReactNode;
    href?: string;
    className?: string;
}

const CardContainer = ({ children, href, className }: CardContainerProps) => {
    return href ? (
        <a
            className={className}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ) : (
        <div className={className}>{children}</div>
    );
};

export const Card = ({
    text,
    imgPath,
    duration,
    price,
    className,
    href
}: Props) => {
    const cardClass = classNames(className, 'card');
    return (
        <CardContainer href={href} className={cardClass}>
            <div className={styles['card__image-container']}>
                <img className={styles.card__image} src={imgPath} alt={text} />
            </div>
            <div className={styles['card__first-line']}>
                <h2 className={styles.card__title}>{text}</h2>
                <span className={styles.card__price}>{price}</span>
            </div>
            <div className={styles.card__duration}>
                <img
                    className={styles['card__icon-duration']}
                    src="https://image.flaticon.com/icons/svg/149/149862.svg"
                    alt="Duration"
                />{' '}
                {duration}
            </div>
        </CardContainer>
    );
};
