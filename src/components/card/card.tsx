import React from 'react';
import { Card as CardType } from 'types/index';

type Props = CardType;

export const Card = ({ text, imgPath, href }: Props) => {
    return (
        <a href={href} target="_blank" rel="noopener noreferrer">
            <img src={imgPath} alt={text} />
            <h2>{text}</h2>
        </a>
    );
};
