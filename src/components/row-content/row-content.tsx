import React from 'react';
import { Card as CardType } from 'types/index';
import { Card } from 'components/card';

interface Props {
    data: CardType[];
}

export const RowContent = (data: Props) => {
    return (
        <div>
            {data.map((item: CardType) => (
                <Card {...item} />
            ))}
        </div>
    );
};
