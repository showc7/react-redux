import ActionTypes from '../constants/ActionTypes';
import store from '../stores/Store';

export function init() {
  return { type: ActionTypes.INIT }
}

export function loadFeed(data) {
  return { type: ActionTypes.LOAD_FEED, data: data }
}
