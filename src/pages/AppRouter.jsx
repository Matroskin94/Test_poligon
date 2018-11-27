import React from 'react';
import { Provider } from 'react-redux';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import initStore from '../store/appStore';
import HomePage from './HomePage.jsx';

const store = initStore();

const AppRouter = props => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />
            </Switch>
        </BrowserRouter>
    </Provider>
);

export default AppRouter;
