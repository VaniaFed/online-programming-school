import React from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import { Card } from 'components/card';
import styles from './card-layout.module.scss';

interface Props {
    data: CardType[];
    cardClassName?: string;
}

export const CardLayout = ({ data, cardClassName }: Props) => {
    return (
        <div className={styles['card-layout']}>
            {data.map((card: CardType, index) => (
                <Card
                    className={classNames(styles.card, cardClassName)}
                    key={index}
                    {...card}
                />
            ))}
        </div>
    );
};
