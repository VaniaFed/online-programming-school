import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Table } from 'components/table';
import { Modal } from 'components/modal';
import { TableAction, TableHeader, TableRow } from 'types/index';
import { Button } from 'components/button';
import { entriesToTable } from 'lib/entries-to-table';
import { addTeacherRequest } from 'services/send-data-to-server';
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
    const [isModalShowed, setIsModalShowed] = useState(false);
    const showModal = () => setIsModalShowed(true);
    const closeModal = () => setIsModalShowed(false);
    const teacherModalFields = [
        { key: 'fullName', text: 'Full name' },
        { key: 'topic', text: 'Topic' },
        { key: 'salary', text: 'Salary' },
        { key: 'dateStartWork', text: 'Date start work' },
        { key: 'passportData', text: 'Passport data' }
    ];
    const validate = (fields: any) => {
        const validFields = fields;
        if (!fields.id) {
            validFields.id = '';
        }
        if (!fields.fullName) {
            validFields.fullName = '';
        }
        if (!fields.topic) {
            validFields.topic = '';
        }
        if (!fields.salary) {
            validFields.salary = '';
        }
        if (!fields.dateStartWork) {
            validFields.dateStartWork = '';
        }
        if (!fields.passportData) {
            validFields.passportData = '';
        }
        return validFields;
    };
    const addTeacherAndCloseModal = (teacherData: any) => {
        validate(teacherData);
        const {
            fullName,
            topic,
            salary,
            dateStartWork,
            passportData
        } = teacherData;
        if (
            teacherData !== {} &&
            fullName.length >= 5 &&
            topic.length >= 5 &&
            salary.length >= 5 &&
            dateStartWork.length >= 5 &&
            passportData.length >= 5
        ) {
            addTeacherRequest(teacherData);
            closeModal();
        }
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
            <Modal
                fields={teacherModalFields}
                title="Add a teacher"
                onSubmit={teacherData => {
                    addTeacherAndCloseModal(teacherData);
                }}
                validate={(fields: any) => {
                    validate(fields);
                }}
                className={!isModalShowed && 'hidden'}
                onCloseModal={closeModal}
            />
            <Button
                text="Add"
                className={styles['teachers__add-button']}
                onClick={showModal}
            />
        </div>
    );
};
