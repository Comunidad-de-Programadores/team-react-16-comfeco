import React from 'react';
import { BrowserRouter,
         Route,
         Switch } from 'react-router-dom';

import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import RecoverPass from '../pages/RecoverPass/RecoverPass';
import Register from '../pages/Register/Register';

const AppRoutes = () => {
    return (
        <>
        <BrowserRouter>
            <Switch>
                <Route path="/home">
                    <Home />
                </Route>
                <Route path="/recover-pass">
                    <RecoverPass />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/">
                    <Login />
                </Route>
            </Switch>
        </BrowserRouter>
        </>
    )
}

export default AppRoutes;