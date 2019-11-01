import React from 'react';
import classNames from 'classnames';

interface Props {
    text: string;
    className?: string;
}

export const TableCell = ({ text, className }: Props) => {
    const cellClass = classNames(className, 'table__cell');
    return <span className={cellClass}>{text}</span>;
};
