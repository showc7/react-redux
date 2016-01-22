import 'babel-core/polyfill';
import ReactDOM from 'react-dom';
import React from 'react';

import FastClick from 'fastclick';
import store from './stores/Store';
import App from './components/App';
import * as RssActions from './actions/rss';
import Router from './components/Router';
import { Provider } from 'react-redux';

import './main.scss';

console.log(store);
/*
store.subscribe(() => {
  console.log('store state changed');
  console.log(store.getState());
  render();
});
*/
function render() {
  console.log('render');
  ReactDOM.render(<Router />,document.getElementById('app'));
}

render();
