import React from 'react';
import classNames from 'classnames'
import { Card as CardType } from 'types/index';
import { Card } from 'components/card';
import styles from './row-content.module.scss'

interface Props {
    data: CardType[];
    cardClassName?: string;
}

export const RowContent = ({data, cardClassName}: Props) => {
    return (
        <div className={styles['row-content']}>
            {data.map((item: CardType) => (
                <Card className={classNames(styles.card, cardClassName)} {...item} />
            ))}
        </div>
    );
};
