import React from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import { Card } from 'components/card';
import styles from './card-layout.module.scss';

type Card = CardType & {
    className: string;
    duration: string;
    price: string;
};

interface Props {
    data: Card[];
    cardClassName?: string;
}

export const CardLayout = ({ data, cardClassName }: Props) => {
    return (
        <div className={styles['card-layout']}>
            {data.map((item: Card) => (
                <Card
                    className={classNames(styles.card, cardClassName)}
                    {...item}
                />
            ))}
        </div>
    );
};
