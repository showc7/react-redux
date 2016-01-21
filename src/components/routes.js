import React from 'react';
import { combineReducers, applyMiddleware, compose, createStore } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
import { createHistory } from 'history';
import { Route } from 'react-router';

import App from './App';

const routes = (
  <Route path="/" component={App}>
    
  </Route>
);
