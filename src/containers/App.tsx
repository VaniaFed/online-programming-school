import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { User } from 'containers/user';
import { Login } from 'components/login';

export const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={User} />
            <Route path="/login" exact component={Login} />
            <Route path="/user" component={User} />
        </Switch>
    );
};
