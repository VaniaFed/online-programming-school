import React from 'react';
import { Form, Field } from 'react-final-form';
import './login-form.scss';

export const LoginForm = () => {
    const onSubmit = () => {};
    const validate = (values: any) => {};

    return (
        <Form
            onSubmit={onSubmit}
            validate={validate}
            render={({ handleSubmit }) => (
                <form onSubmit={handleSubmit}>
                    <h2>Login</h2>
                    <div>
                        <label>Full name</label>
                        <Field
                            name="fullName"
                            component="input"
                            placeholder="First Name"
                            className="login__text-input"
                        />
                    </div>
                </form>
            )}
        />
    );
};
