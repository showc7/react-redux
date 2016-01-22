import { createStore, combineReducers, compose } from 'redux';
import { reduxReactRouter, routerStateReducer, ReduxRouter } from 'redux-router';
//import { createBrowserHistory } from 'history/lib/createBrowserHistory';
//import routes from '../components/routes';
import Rss from './reducers/Rss';

const reducer = combineReducers({ Rss });
//const store = createStore(reducer);
const store = compose()(createStore)(reducer,{ Rss: {info: 'INFO'} });
//const store = compose(reduxReactRouter({routes}))(createStore)(reducer,{});

export default store;
