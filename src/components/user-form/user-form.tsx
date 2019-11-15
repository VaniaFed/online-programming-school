import React from 'react';
import { Form, Field } from 'react-final-form';
import classNames from 'classnames';
import { Button } from 'components/button';
import { Fields } from 'types/fields';
import styles from './user-form.module.scss';

interface Props {
    title: string;
    className?: string;
    fieldsData: Fields[];
    onSubmit(something?: any): any;
    validate(something?: any): any;
    modal?: boolean;
}

const TextField = ({ item }: { item: Fields }) => {
    return (
        <>
            <label htmlFor={item.key} className={styles.form__label}>
                {item.text}
            </label>
            <Field
                name={item.key}
                id={item.key}
                component="input"
                placeholder={item.text}
                className={styles['form__text-input']}
            />
        </>
    );
};

export const UserForm = ({
    title,
    className,
    fieldsData,
    onSubmit,
    validate,
    modal = true
}: Props) => {
    const classContainer = classNames(className, styles.form);
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className={classContainer} onSubmit={handleSubmit}>
                    <div className={styles['form__first-line']}>
                        <h2 className={styles.form__title}>{title}</h2>
                        <svg
                            className={styles.modal__close}
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 47.971 47.971"
                        >
                            <path d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z" />
                        </svg>
                    </div>
                    {fieldsData.map((item, i) => (
                        <TextField item={item} key={i} />
                    ))}
                    <Button
                        type="submit"
                        text={title}
                        className={styles['form__button-submit']}
                    />
                </form>
            )}
        />
    );
};
