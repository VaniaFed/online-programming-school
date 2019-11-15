import React from 'react';
import { UserForm } from 'components/user-form';
import styles from './modal.module.scss';

interface Props {
    data: any;
}

const modalData = [
    { key: 'fullname', text: 'Full name' },
    { key: 'course', text: 'Course' }
];

export const Modal = ({ data }: Props) => {
    return (
        <div className={styles.modal}>
            <UserForm
                title="Add student"
                fieldsData={modalData}
                onSubmit={() => {}}
                validate={() => {}}
                modal={true}
            />
        </div>
    );
};
