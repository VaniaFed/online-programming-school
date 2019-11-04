import React from 'react';
import classNames from 'classnames';
import { Card as CardType } from 'types/index';
import { Card } from 'components/card';
import styles from './row-content.module.scss';

type CourseCard = CardType & {
    className: string;
    duration: string;
    price: string;
};

interface Props {
    data: CourseCard[];
    cardClassName?: string;
}

export const RowContent = ({ data, cardClassName }: Props) => {
    return (
        <div className={styles['row-content']}>
            {data.map((item: CourseCard) => (
                <Card
                    className={classNames(styles.card, cardClassName)}
                    {...item}
                />
            ))}
        </div>
    );
};
