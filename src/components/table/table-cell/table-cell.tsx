import React from 'react';
import classNames from 'classnames';
import styles from './table-cell.module.scss';

interface Props {
    text: string;
    className?: string;
    type?: 'header' | 'text';
    href?: string;
}

export const TableCell = ({
    text,
    className,
    type = 'text',
    href = ''
}: Props) => {
    const cellClass = classNames(className, styles.cell);
    const content =
        href === '' ? (
            text
        ) : (
            <a href={href} target="_blank">
                {text}
            </a>
        );
    console.log(href);
    return type === 'header' ? (
        <th className={cellClass}>{content}</th>
    ) : (
        <td className={cellClass}>{content}</td>
    );
};
