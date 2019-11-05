import React, { ReactNode } from 'react';
import { Card as CardType } from 'types/index';
import classNames from 'classnames';
import styles from './card.module.scss';

type Props = CardType & {
    className: string;
};

interface CardContainerProps {
    children: ReactNode;
    href?: string;
    className?: string;
}

const CardContainer = ({ children, href, className }: CardContainerProps) => {
    const cardWrapperClass = classNames(className, styles.card__wrapper);
    return href ? (
        <a
            className={cardWrapperClass}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </a>
    ) : (
        <div className={cardWrapperClass}>{children}</div>
    );
};

export const Card = ({ text, imgPath, className, href }: Props) => {
    return (
        <CardContainer href={href} className={className}>
            <img className={styles.card__image} src={imgPath} alt={text} />
            <h2 className={styles.card__title}>{text}</h2>
        </CardContainer>
    );
};
