import React from 'react';
import {
    BrowserRouter,
    Redirect,
    Route, Switch
} from "react-router-dom";
import Home from '../Pages/Home';
import Login from '../Pages/Login';
import Register from '../Pages/Register';
import PrivateRouter from './privateRouter';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <PrivateRouter exact path="/">
                    <Redirect from="/" to="/dashboard" />
                </PrivateRouter>
                <PrivateRouter path="/dashboard">
                    <Home />
                </PrivateRouter>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
            </Switch>
        </BrowserRouter >
    );
};

export default Router;