import React from 'react';
import { Form, Field } from 'react-final-form';
import { Button } from 'components/button';
import './login-form.scss';

const login = loginData => {
    console.log(loginData);
    fetch('/login', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginData)
    });
};

export const LoginForm = () => {
    const onSubmit = login;
    const validate = (values: any) => {};
    interface Fields {
        key: string;
        text: string;
    }
    const loginData: Fields[] = [
        {
            key: 'fullName',
            text: 'Full name'
        },
        {
            key: 'password',
            text: 'Password'
        },
        {
            key: 'passwordAgain',
            text: 'Password again'
        },
        {
            key: 'email',
            text: 'E-mail'
        },
        {
            key: 'phoneNumber',
            text: 'Phone number'
        }
    ];
    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2 className="login-form__title">Login</h2>
                    {loginData.map((item, i) => (
                        <>
                            <label
                                htmlFor={item.key}
                                className="login-form__label"
                            >
                                {item.text}
                            </label>
                            <Field
                                key={i}
                                name={item.key}
                                id={item.key}
                                component="input"
                                placeholder={item.text}
                                className="login-form__text-input"
                            />
                        </>
                    ))}
                    <Button
                        type="submit"
                        text="Login"
                        className="login-form__button-submit"
                    />
                </form>
            )}
        />
    );
};
