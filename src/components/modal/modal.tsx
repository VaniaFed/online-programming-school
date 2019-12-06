import React from 'react';
import { UserForm } from 'components/user-form';
import classNames from 'classnames';
import styles from './modal.module.scss';

interface Props {
    title: string;
    fields: any;
    className?: string;
    validate?(any?: any): any;
    onSubmit?(any?: any): any;
    onCloseModal(any?: any): any;
}

export const Modal = ({
    title,
    fields,
    onSubmit,
    validate,
    className,
    onCloseModal
}: Props) => {
    const modalClass = classNames(className, styles.modal);
    return (
        <div className={modalClass}>
            <UserForm
                title={title}
                fieldsData={fields}
                onSubmit={onSubmit}
                validate={validate}
                modal
                className={styles.modal__form}
                onCloseModal={onCloseModal}
            />
        </div>
    );
};
