import React from 'react';
import { TableHeader } from 'components/table-header';
import { TableBody } from 'components/table-body';
import classNames from 'classnames';
import {
    TableHeader as ITableHeader,
    TableBody as ITableBody
} from 'types/index';
import styles from './table.module.scss';

interface Props {
    headers: ITableHeader[];
    body: ITableBody[][];
    className?: string;
}

export const Table = ({ headers, body, className }: Props) => {
    const tableClass = classNames(className, styles.table);
    return (
        <table className={tableClass}>
            <TableHeader headers={headers} className={styles.table__header} />
            <TableBody body={body} className={styles.table__body} />
        </table>
    );
};
