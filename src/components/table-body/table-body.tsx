import React from 'react';
import { TableCell } from 'components/table-cell';
import { TableBody as ITableBody } from 'types/index';

interface Props {
    body: ITableBody[][];
    className?: string;
}

export const TableBody = ({ body, className }: Props) => {
    return (
        <tbody className={className}>
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
