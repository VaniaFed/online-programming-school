import React from 'react';
import { UserForm } from 'components/user-form';
import { Fields } from 'types/index';

export const RegisterPage = () => {
    const fieldsData: Fields[] = [
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
    const register = (data: any) => {
        fetch('/register', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
    };

    const validate = () => {};
    return (
        <UserForm
            title="Register"
            fieldsData={fieldsData}
            onSubmit={register}
            validate={validate}
        />
    );
};
