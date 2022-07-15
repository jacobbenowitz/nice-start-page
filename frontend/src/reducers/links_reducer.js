import {
  RECEIVE_LINK,
  RECEIVE_LINKS,
  RECEIVE_USER_LINKS,
  REMOVE_LINK
} from '../actions/link_actions';

import { merge } from 'lodash'

const IDLE = 'IDLE';
const DONE = 'DONE';

const initialState = {
  all: {},
  user: {},
  status: IDLE
};

const linksReducer = (state = initialState, action) => {
  Object.freeze(state);
  let nextState = merge({}, state);

  switch (action.type) {
    case RECEIVE_LINKS:
      action.links.data.forEach(link => {
        console.log('link', link)
        nextState.all[link._id] = link
      }
      )
      nextState.status = DONE;
      return nextState;
    case RECEIVE_USER_LINKS:
      action.links.data.forEach(link =>
        nextState.user[link._id] = link
      )
      nextState.status = DONE;
      return nextState;
    case RECEIVE_LINK:
      nextState.user[action.link.data._id] = action.link.data;
      nextState.all[action.link.data._id] = action.link.data;
      nextState.status = DONE;
      return nextState;
    case REMOVE_LINK:
      delete nextState.user[action.link.data._id];
      delete nextState.all[action.link.data._id];
      nextState.status = DONE;
      return nextState;
    default:
      return state;
  }
}

export default linksReducer;