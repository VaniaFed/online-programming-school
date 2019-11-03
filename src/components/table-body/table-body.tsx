import React from 'react';
import { TableCell } from 'components/table-cell';
import { TableRow, TableCell as ITableCell } from 'types/index';
import styles from './table-body.module.scss';
interface Action {
    type: string;
    fn(): any;
    text: string;
}

interface Props {
    body: TableRow[];
    className?: string;
    actions?: Action[];
}

export const TableBody = ({ body, className, actions }: Props) => {
    return (
        <tbody className={className}>
            {body.map((row: TableRow) => (
                <tr>
                    {row.cells.map((cell: ITableCell) => (
                        <TableCell text={cell.text} href={cell.href} />
                    ))}
                    {actions.map((action: any) => (
                        <button
                            className={styles['table-body__control-button']}
                            onClick={() => {
                                action.fn(row.id);
                            }}
                        >
                            {action.text}
                        </button>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
