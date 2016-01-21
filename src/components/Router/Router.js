import React, { Component }from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';

import App from '../App';
import Home from '../Home';
import NotFoundPage from '../NotFoundPage';

import store from '../../stores/Store';
import { init } from '../../actions/rss';

//import createBrowserHistory from 'history/lib/createBrowserHistory';

export default class router extends Component {
/*
  componentDidMount() {
    console.log('Router.didMount');
    // initialize
    store.dispatch(init());
  }
*/
  render() {

    return (
      <Provider store={store}>
        <Router>
          <Route path='/' component={App}>
          </Route>
        </Router>
      </Provider>
    );
  }
}

// <IndexRoute component={NotFoundPage} />
