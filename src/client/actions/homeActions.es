import store from 'store/store';
import HomeActionTypes from 'constants/actionTypes/homeActionTypes';
import HomeSelectors from 'selectors/homeSelectors';
import HomeService from 'services/homeService';

export default {
    incrementCounter: () => {
        store.dispatch({
            type: HomeActionTypes.UPDATE_COUNTER,
            counter: HomeSelectors.homeCounter(store.getState()) + 1
        });
    },

    decrementCounter: () => {
        store.dispatch((dispatch, getState) => {
            HomeService.setTime().then(() => {
                dispatch({
                    type: HomeActionTypes.UPDATE_COUNTER,
                    counter: HomeSelectors.homeCounter(getState()) - 1
                });
            });
        });
    }
};