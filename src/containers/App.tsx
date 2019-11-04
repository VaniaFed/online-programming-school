import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { LoginPage } from 'pages/login-page';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={LoginPage} />
            <Route path="/login" exact component={LoginPage} />
        </Switch>
    );
};
