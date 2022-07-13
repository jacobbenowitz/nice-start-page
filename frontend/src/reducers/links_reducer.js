import {
  RECEIVE_LINK,
  RECEIVE_LINKS,
  RECEIVE_USER_LINKS,
  REMOVE_LINK
} from '../actions/link_actions';

import merge from 'lodash'

const initialState = {
  all: {},
  user: {}
};

const linksReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LINKS:
      nextState.all = action.links.data;
      return nextState;
    case RECEIVE_USER_LINKS:
      nextState.user = action.links.data;
      return nextState;
    case RECEIVE_LINK:
      nextState.user[action.link.data.id] = action.link.data;
      return nextState;
    case REMOVE_LINK:
      delete nextState.user[action.link.data.id];
      return nextState;
    default:
      return state;
  }
}

export default linksReducer;