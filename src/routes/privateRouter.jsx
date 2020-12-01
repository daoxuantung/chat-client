import React from 'react';
import { Redirect, Route } from "react-router-dom";

const PrivateRouter = ({ children, ...rest }) => {

    const token = localStorage.getItem('token');

    return (
        <Route {...rest} render={props => (
            token ? children : <Redirect to="/login" />
        )} />
    );
}

export default PrivateRouter;
