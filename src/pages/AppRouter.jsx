import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import initStore from '../store/appStore';
import HomePage from './HomePage.jsx';
import MainLayout from './MainLayout.jsx';

import './global.css';

const store = initStore();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <MainLayout>
                    <Route
                        exact
                        path='/'
                        component={HomePage}
                    />
                </MainLayout>
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
