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
                                pathname: "/",
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
                    <PrivateHomePage exact path="/">
                        <Home />
                    </PrivateHomePage>
                    <PrivateRoute exact path="/login">
                        <Login />
                    </PrivateRoute>
                    <PrivateRoute exact path="/register">
                        <Register />
                    </PrivateRoute>
                </Switch>
            </BrowserRouter >
        </Suspense>
    );
};

export default router;