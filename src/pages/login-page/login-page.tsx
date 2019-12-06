import React from 'react';
import { UserForm } from 'components/user-form';
import { Fields } from 'types/index';

export const LoginPage = () => {
    const fieldsData: Fields[] = [
        {
            key: 'fullName',
            text: 'Full name'
        },
        {
            key: 'password',
            text: 'Password'
        }
    ];
    const login = (data: any) => {
        fetch('/login', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

    const validate = () => {
    };
    return (
        <UserForm
            title="Login"
            fieldsData={fieldsData}
            onSubmit={login}
            validate={validate}
        />
    );
};
