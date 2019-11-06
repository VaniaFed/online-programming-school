import React from 'react';
import { Table } from 'components/table';
import { TableHeader, TableRow } from 'types/index';
import { TableAction } from 'types/index';
import { Button } from 'components/button';
import styles from './students.module.scss';

interface Props {
    className?: string;
}

const headers = [
    {
        text: 'ФИО'
    },
    {
        text: 'Курс'
    }
];

const body = [
    {
        cells: [
            {
                text: 'Федяков Иван Дмитриевич'
            },
            {
                text: 'Frontend development'
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
                text: 'Backend development'
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
const addStudent = () => {
    console.log('Student was added');
};

export const Students = ({ className }: Props) => {
    return (
        <div className={className}>
            <h2 className="admin__h2">Students</h2>
            <Table data={tableTemporaryData} actions={actions} />
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={addStudent}
            />
        </div>
    );
};
