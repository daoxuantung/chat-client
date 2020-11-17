import React, { lazy, Suspense } from 'react';
import {
    BrowserRouter,
    Redirect, Route, Switch
} from "react-router-dom";
import Login from '../Pages/Login';
import Register from '../Pages/Register';

const Home = lazy(() => import('../Pages/Home'));

const PrivateHomePage = ({ children }) => {
    const token = localStorage.getItem('token') || '';

    return (
        <Route
            render={({ location }) =>
                token ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem('token') || '';

    return (
        <Route
            render={({ location }) =>
                !token ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/home",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
}


const router = () => {
    return (
        <Suspense fallback={<div></div>}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/">
                        <Redirect to="/home" />
                    </Route>
                    <PrivateHomePage path="/home">
                        <Home />
                    </PrivateHomePage>
                    <PrivateRoute path="/login">
                        <Login />
                    </PrivateRoute>
                    <PrivateRoute path="/register">
                        <Register />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter >
        </Suspense>
    );
};

export default router;