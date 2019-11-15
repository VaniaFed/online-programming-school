import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Table } from 'components/table';
import { TableHeader, TableRow } from 'types/index';
import { TableAction } from 'types/index';
import { Button } from 'components/button';
import { entriesToTable } from 'lib/entries-to-table';
import { teacherListSelector } from 'selectors/teacher-list-selector';
import styles from './teachers.module.scss';
import { actions } from 'actions/index';

interface Props {
    className?: string;
}

interface TableData {
    headers: TableHeader[];
    body: TableRow[];
}

export const Teachers = ({ className }: Props) => {
    const headers = [
        {
            text: 'id'
        },
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

    const tableActions: TableAction[] = [
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
    const dispatch = useDispatch();
    const teachers: any[] = useSelector(teacherListSelector);

    const formattedTeachers: any = entriesToTable(teachers);
    const data: TableData = {
        headers,
        body: formattedTeachers
    };
    useEffect(() => {
        dispatch(actions.fetchTeachersRequest());
    }, []);
    return (
        <div className={className}>
            <h2 className="admin__h2">Teachers</h2>
            <Table data={data} actions={tableActions} />
            <Button
                text="Add"
                className={styles['teachers__add-button']}
                onClick={addTeacher}
            />
        </div>
    );
};
