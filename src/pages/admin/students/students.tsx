import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'components/table';
import { Student, TableAction, TableHeader, TableRow } from 'types/index';
import { Button } from 'components/button';
import { studentListSelector } from 'selectors/student-list-selector';
import { actions } from 'actions/index';
import { entriesToTable } from 'lib/entries-to-table';
import styles from './students.module.scss';

interface Props {
    className?: string;
}

interface TableData {
    headers: TableHeader[];
    body: TableRow[];
}

const addStudent = () => {
    console.log('Student was added');
};

export const Students = ({ className }: Props) => {
    const dispatch = useDispatch();
    const students: Student[] = useSelector(studentListSelector);
    const formattedStudents = entriesToTable(students);

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
    const headers = [
        {
            text: 'id'
        },
        {
            text: 'ФИО'
        },
        {
            text: 'Курс'
        }
    ];

    const data: TableData = {
        headers,
        body: formattedStudents as any
    };
    useEffect(() => {
        dispatch(actions.fetchStudentsRequest());
    }, []);
    return (
        <div className={className}>
            <h2 className="admin__h2">Students</h2>
            {data.body && <Table data={data} actions={tableActions}/>}
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={addStudent}
            />
        </div>
    );
};
