import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from 'pages/login-page';
import { Admin } from 'pages/admin';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginPage} />
            <Route path="/admin" exact component={Admin} />
        </Switch>
    );
};
