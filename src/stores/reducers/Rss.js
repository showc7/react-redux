import ActionTypes from '../../constants/ActionTypes';
import { urlSources } from '../../config.js';
import ContentTypes from '../../constants/ContentTypes';
import _ from 'lodash';

export default function rss(state = {}, action) {
  console.log(action);
  console.log(state);
  //console.log('rss-reducer run with state: ' + JSON.stringify(state) + ' and action: ' + JSON.stringify(action));
  switch(action.type) {
    case ActionTypes.INIT:
      return init(state);
    case ActionTypes.LOAD_FEED:
      return loadFeed(state, action);
    default:
      return state;
  }
}

function init(state) {
  console.log('init ' + JSON.stringify(state));
  return _.extend(state, {
    test: "TEST"
  });
}

function loadFeed(state, action) {
  return _.extend(state, {
    content: {
      contentType: ContentTypes.SHOW_SPECIFIC,
      feedPreview: action.data
    }
  });
}
