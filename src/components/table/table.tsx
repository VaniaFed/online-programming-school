import React from 'react';
import { TableHeader } from 'components/table/table-header';
import { TableBody } from 'components/table/table-body';
import classNames from 'classnames';
import {
    TableAction,
    TableHeader as ITableHeader,
    TableRow
} from 'types/index';
import styles from './table.module.scss';

interface Props {
    data: {
        headers: ITableHeader[];
        body: TableRow[];
    };
    className?: string;
    actions: TableAction[];
}

export const Table = ({ data, className, actions }: Props) => {
    const tableClass = classNames(className, styles.table);
    return (
        <table className={tableClass}>
            <TableHeader
                headers={data.headers}
                className={styles.table__header}
            />
            <TableBody
                body={data.body}
                className={styles.table__body}
                actions={actions}
            />
        </table>
    );
};
