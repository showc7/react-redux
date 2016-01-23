import Immutable from 'immutable';
import HomeActionTypes from 'constants/actionTypes/homeActionTypes';

const initialState = {
    label : "Home",
    counter : 0
};

export default function homeReducer(state = Immutable.fromJS(initialState), action) {
    switch(action.type) {
        case HomeActionTypes.UPDATE_COUNTER:
            return _updateCounter(state, action);
        default:
            return state;
    }
}

function _updateCounter(state, action) {
    return state.set('counter', action.counter);
}