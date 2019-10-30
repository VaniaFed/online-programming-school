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
                className={styles.form__textInput}
            />
        </>
    );
};

export const UserForm = ({
    title,
    className,
    fieldsData,
    onSubmit,
    validate
}: Props) => {
    const classContainer = classNames(className, styles.form);
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className={classContainer} onSubmit={handleSubmit}>
                    <h2 className={styles.form__title}>{title}</h2>
                    {fieldsData.map((item, i) => (
                        <TextField item={item} key={i} />
                    ))}
                    <Button
                        type="submit"
                        text={title}
                        className={styles.form__buttonSubmit}
                    />
                </form>
            )}
        />
    );
};
