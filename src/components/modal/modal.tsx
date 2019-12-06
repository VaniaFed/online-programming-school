import React from 'react';
import { UserForm } from 'components/user-form';
import styles from './modal.module.scss';

interface Props {
    title: string;
    fields: any;
    onSubmit?(any?: any): any;
}


export const Modal = ({ title, fields, onSubmit }: Props) => {
    return (
        <div className={styles.modal}>
            <UserForm
                title={title}
                fieldsData={fields}
                onSubmit={onSubmit}
                validate={() => {}}
                modal={true}
                className={styles.modal__form}
            />
        </div>
    );
};
