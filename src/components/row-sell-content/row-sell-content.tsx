import React from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import { SellCard } from './sell-card';
import styles from './row-sell-content.module.scss';

type CourseCard = CardType & {
    className: string;
    duration: string;
    price: string;
};

interface Props {
    data: CourseCard[];
    cardClassName?: string;
}

export const RowSellContent = ({ data, cardClassName }: Props) => {
    return (
        <div className={styles['row-sell-content']}>
            {data.map((item: CourseCard) => (
                <SellCard
                    className={classNames(styles.card, cardClassName)}
                    {...item}
                />
            ))}
        </div>
    );
};
