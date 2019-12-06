import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Table } from 'components/table';
import { Modal } from 'components/modal';
import { Button } from 'components/button';
import { studentListSelector } from 'selectors/student-list-selector';
import { actions } from 'actions/index';
import { entriesToTable } from 'lib/entries-to-table';
import { addStudentRequest } from 'services/send-data-to-server';

import { Student, TableAction, TableHeader, TableRow } from 'types/index';
import styles from './students.module.scss';

interface Props {
    className?: string;
}

interface TableData {
    headers: TableHeader[];
    body: TableRow[];
}

export const Students = ({ className }: Props) => {
    const [isModalShowed, setIsModalShowed] = useState(false);
    const showModal = () => setIsModalShowed(true);
    const closeModal = () => setIsModalShowed(false);
    const studentsModalFields = [
        { key: 'fullName', text: 'Full name' },
        { key: 'course', text: 'Course' }
    ];
    const validate = (fields: any) => {
        const validFields = fields;
        if (!fields.fullName) {
            validFields.fullName = '';
        }
        if (!fields.course) {
            validFields.course = '';
        }
        return validFields;
    };
    const addStudentAndCloseModal = (studentData: any) => {
        validate(studentData);
        const { fullName, course } = studentData;
        if (studentData !== {} && fullName.length >= 5 && course.length >= 5) {
            addStudentRequest(studentData);
            closeModal();
        }
    };

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

    const dispatch = useDispatch();
    const students: Student[] = useSelector(studentListSelector);
    const formattedStudents = entriesToTable(students);
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
            {data.body && <Table data={data} actions={tableActions} />}
            <Modal
                fields={studentsModalFields}
                title="Add a student"
                onSubmit={studentData => {
                    addStudentAndCloseModal(studentData);
                }}
                validate={(fields: any) => {
                    validate(fields);
                }}
                className={!isModalShowed && 'hidden'}
                onCloseModal={closeModal}
            />
            <Button
                text="Add"
                className={styles['courses__add-button']}
                onClick={() => {
                    showModal();
                }}
            />
        </div>
    );
};
