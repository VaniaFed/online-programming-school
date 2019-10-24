import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginForm } from 'components/login-form';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginForm} />
            <Route path="/login" exact component={LoginForm} />
        </Switch>
    );
};
