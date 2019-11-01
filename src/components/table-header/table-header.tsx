import React from 'react';
import classNames from 'classnames';
import { TableCell } from 'components/table-cell';
import { TableHeader as ITableHeader } from 'types/index';
import styles from './table-header.module.scss';

interface Props {
    headers: ITableHeader[];
    className?: string;
}

export const TableHeader = ({ headers, className }: Props) => {
    const headerContainerClass = classNames(styles['table-header'], className);
    return (
        <div className={headerContainerClass}>
            {headers.map((item: ITableHeader) => (
                <TableCell
                    text={item.text}
                    className={styles['table-header__text']}
                />
            ))}
        </div>
    );
};
