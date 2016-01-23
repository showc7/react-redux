import ReactDOM from 'react-dom';
import React from 'react';

// import FastClick from 'fastclick';
import store from 'store/store';
import Router from 'router';

// store.subscribe(() => {
//     console.log('store state changed');
//     console.log(store.getState());
//     render();
// });

const render = () => {
//     console.log('render');
    ReactDOM.render(<Router />, document.getElementById('app'));
}

render();
