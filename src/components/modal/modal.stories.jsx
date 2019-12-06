import React from 'react';
import { storiesOf } from '@storybook/react';

import { Modal } from './index';

const studentData = [
    { key: 'fullName', text: 'Full name' },
    { key: 'course', text: 'Course' }
];

const teacherData = [
    { key: 'fullName', text: 'Full name' },
    { key: 'topic', text: 'Topic' },
    { key: 'salary', text: 'Salary' },
    { key: 'dateStartWork', text: 'Date start work' },
    { key: 'passportData', text: 'Passport data' }
];
storiesOf('Modal', module)
    .add('students', () => (
        <Modal
            title="Add a student"
            fields={studentData}
            onSubmit={e => {
                console.log(e);
            }}
        />
    ))
    .add('teachers', () => (
        <Modal
            title="Add a teacher"
            fields={teacherData}
            onSubmit={e => {
                console.log(e);
            }}
        />
    ));
