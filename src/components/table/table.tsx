import React from 'react';
import { TableHeader } from 'components/table-header';
import { TableBody } from 'components/table-body';
import {
    TableHeader as ITableHeader,
    TableBody as ITableBody
} from 'types/index';

interface Props {
    headers: ITableHeader[];
    body: ITableBody[];
}

export const Table = ({ headers, body }: Props) => {
    return (
        <div>
            <TableHeader headers={headers} />
            <TableBody body={body} />
        </div>
    );
};
