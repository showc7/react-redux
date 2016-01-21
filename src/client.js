import 'babel-core/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';

import FastClick from 'fastclick';
import store from './stores/Store';
import App from './components/App';
import * as RssActions from './actions/rss';
import router from './components/Router';
import { Provider } from 'react-redux';

console.log(store);
/*
store.subscribe(() => {
  console.log('store state changed');
  console.log(store.getState());
  render();
});
*/
function render() {
  ReactDOM.render(<router />,document.getElementById('app'));
}

render();
