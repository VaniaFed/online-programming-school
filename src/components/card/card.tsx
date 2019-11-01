import React from 'react';
import { Card as CardType } from 'types/index';

type Props = CardType & {
    className: string;
}

export const Card = ({ text, imgPath, className, href }: Props) => {
    return (
        <a className={className} href={href} target="_blank" rel="noopener noreferrer">
            <img src={imgPath} alt={text} />
            <h2>{text}</h2>
        </a>
    );
};
