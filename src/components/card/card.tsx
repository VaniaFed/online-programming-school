import React, { ReactNode } from 'react';
import { Card as CardType } from 'types/index';

type Props = CardType & {
    className: string;
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

export const Card = ({ text, imgPath, className, href }: Props) => {
    return (
        <CardContainer href={href} className={className}>
            <img src={imgPath} alt={text} />
            <h2>{text}</h2>
        </CardContainer>
    );
};
