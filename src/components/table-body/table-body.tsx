import React from 'react';
import classNames from 'classnames';
import { TableCell } from 'components/table-cell';
import { TableBody as ITableBody } from 'types/index';
import styles from './table-body.module.scss';

interface Props {
    body: ITableBody[][];
    className?: string;
}

export const TableBody = ({ body, className }: Props) => {
    const bodyContainerClass = classNames(styles['table-body'], className);
    return (
        <tbody className={bodyContainerClass}>
            {body.map((row: ITableBody[]) => (
                <tr>
                    {row.map((cell: ITableBody) => (
                        <TableCell text={cell.text} href={cell.href} />
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
