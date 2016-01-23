import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import homeReducer from 'store/reducers/homeReducer';
import userReducer from 'store/reducers/userReducer';
import thunk from 'redux-thunk';

import React from 'react';

const reducer = combineReducers({ 
    home: homeReducer,
    user: userReducer
});

const store = compose(applyMiddleware(thunk))(createStore)(reducer);

export default store;
