import React from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import { SellCard } from './sell-card';
import styles from './sell-card-layout.module.scss';

type CourseCard = CardType & {
    className: string;
    duration: string;
    price: string;
};

interface Props {
    data: CourseCard[];
    cardClassName?: string;
}

export const SellCardLayout = ({ data, cardClassName }: Props) => {
    return (
        <div className={styles['sell-card-layout']}>
            {data.map((item: CourseCard) => (
                <SellCard
                    className={classNames(styles.card, cardClassName)}
                    {...item}
                />
            ))}
        </div>
    );
};
