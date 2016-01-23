import React, { Component }from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from 'components/app';
import Home from 'components/home';
// import NotFoundPage from '../NotFoundPage';

import store from 'store/store';
import { browserHistory } from 'react-router'

export default class router extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router history={browserHistory}>
          <Route path='/' component={App} >
            <IndexRoute component={Home} />
            <Route path='home' component={Home} />
          </Route>
        </Router>
      </Provider>
    );
  }
}
