import Immutable from 'immutable';

const initialState = {
    users: []
};

export default function userReducer(state = Immutable.fromJS(initialState), action) {
    switch(action.type) {
        default:
            return state;
    }
}