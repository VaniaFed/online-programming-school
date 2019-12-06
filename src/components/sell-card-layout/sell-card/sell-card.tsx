import React, { ReactNode } from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import styles from './sell-card.module.scss';

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
    const sellCardWrapperClass = classNames(
        className,
        styles['sell-card__wrapper']
    );
    return href ? (
        <a
            className={sellCardWrapperClass}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ) : (
        <div className={sellCardWrapperClass}>{children}</div>
    );
};

export const SellCard = ({
                             text,
                             imgPath,
                             duration,
                             price,
                             className,
                             href
                         }: Props) => {
    const cardClass = classNames(className, 'sell-card');
    return (
        <CardContainer href={href} className={cardClass}>
            <img
                className={styles['sell-card__image']}
                src={imgPath}
                alt={text}
            />
            <div className={styles['sell-card__first-line']}>
                <h2 className={styles['sell-card__title']}>{text}</h2>
                <span className={styles['sell-card__price']}>{price}</span>
            </div>
            <div className={styles['sell-card__duration']}>
                <img
                    className={styles['sell-card__icon-duration']}
                    src="https://image.flaticon.com/icons/svg/149/149862.svg"
                    alt="Duration"
                />{' '}
                {duration}
            </div>
        </CardContainer>
    );
};
