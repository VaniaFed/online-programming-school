import React from 'react';
import classNames from 'classnames';
import { TableCell } from 'components/table-cell';
import { TableBody as ITableBody } from 'types/index';
import styles from './table-body.module.scss';

interface Props {
    body: ITableBody[];
    className?: string;
}

export const TableBody = ({ body, className }: Props) => {
    const bodyContainerClass = classNames(styles['table-body'], className);
    return (
        <div className={bodyContainerClass}>
            {body.map((item: ITableBody) => (
                <TableCell text={item.text} />
            ))}
        </div>
    );
};
