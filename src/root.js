import React, { Component, PropTypes } from 'react';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Provider } from 'react-redux';

// store
import store from './app_store';

// components
import Home from './components/home';
import App from './components/app';

export default class Root extends Component {
    render() {
        return (
            <div>
                <Provider store={store}>
                    <Router history={createBrowserHistory()}>
                        <Route path='/' component={App} />
                        <Route path='/home' component={Home}/>
                    </Router>
                </Provider>
            </div>
        );
    }
};
