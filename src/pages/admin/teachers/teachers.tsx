import React from 'react';
import { Table } from 'components/table';
import { TableHeader, TableRow } from 'types/index';
import { TableAction } from 'types/index';
import { Button } from 'components/button';
import styles from './teachers.module.scss';

interface Props {
    className?: string;
}

const headers = [
    {
        text: 'ФИО'
    },
    {
        text: 'Тема'
    },
    {
        text: 'Зарплата'
    },
    {
        text: 'Дата начала работы'
    },
    {
        text: 'Паспортные данные'
    }
];

const body = [
    {
        cells: [
            {
                text: 'Федяков Иван Дмитриевич'
            },
            {
                text: 'Css'
            },
            {
                text: '200к'
            },
            {
                text: '2019.11.01'
            },
            {
                text: '4353 123123'
            }
        ],
        id: '1'
    },
    {
        cells: [
            {
                text: 'Федяков Иван Дмитриевич'
            },
            {
                text: 'Css'
            },
            {
                text: '200к'
            },
            {
                text: '2019.11.01'
            },
            {
                text: '4353 123123'
            }
        ],
        id: '2'
    }
];

interface TableData {
    headers: TableHeader[];
    body: TableRow[];
}

const tableTemporaryData: TableData = {
    headers,
    body
};

const actions: TableAction[] = [
    {
        type: 'delete',
        fn: id => {
            console.log(`deleted: ${id}`);
        },
        text: 'Delete'
    },
    {
        type: 'edit',
        fn: id => {
            console.log(`changed: ${id}`);
        },
        text: 'Edit'
    }
];
const addTeacher = () => {
    console.log('Teacher was added');
};

export const Teachers = ({ className }: Props) => {
    return (
        <div className={className}>
            <h2 className="admin__h2">Teachers</h2>
            <Table data={tableTemporaryData} actions={actions} />
            <Button
                text="Add"
                className={styles['teachers__add-button']}
                onClick={addTeacher}
            />
        </div>
    );
};
