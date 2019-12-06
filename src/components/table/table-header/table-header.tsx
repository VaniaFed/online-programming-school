import React from 'react';
import { TableCell } from 'components/table/table-cell';
import { TableHeader as ITableHeader } from 'types/index';

interface Props {
    headers: ITableHeader[];
    className?: string;
}

export const TableHeader = ({ headers, className }: Props) => {
    return (
        <thead className={className}>
        <tr>
            {headers.map((item: ITableHeader, index: number) => (
                <TableCell text={item.text} type="header" key={index}/>
            ))}
        </tr>
        </thead>
    );
};
