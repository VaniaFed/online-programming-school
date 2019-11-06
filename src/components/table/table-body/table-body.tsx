import React from 'react';
import { TableCell } from 'components/table/table-cell';
import { TableRow, TableCell as ITableCell } from 'types/index';
import styles from './table-body.module.scss';
import { TableAction } from 'types/index';

interface Props {
    body: TableRow[];
    className?: string;
    actions?: TableAction[];
}

export const TableBody = ({ body, className, actions }: Props) => {
    return (
        <tbody className={className}>
            {body.map((row: TableRow, index: number) => (
                <tr key={index}>
                    {row.cells.map((cell: ITableCell, index: number) => (
                        <TableCell
                            text={cell.text}
                            href={cell.href}
                            key={index}
                        />
                    ))}
                    {actions.map((action: any, index: number) => (
                        <td key={index}>
                            <button
                                type="button"
                                className={styles['table-body__control-button']}
                                onClick={() => {
                                    action.fn(row.id);
                                }}
                            >
                                {action.text}
                            </button>
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    );
};
