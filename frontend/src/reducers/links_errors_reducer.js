import {
  RECEIVE_LINK_ERRORS,
} from '../actions/link_actions';

import merge from 'lodash';

const linksErrorReducer = (state = [], action) => {
  Object.freeze(state);
  let nextState = merge([], state);

  switch (action.type) {
    case RECEIVE_LINK_ERRORS:
      return action.errors;
    default:
      return state;
  }
}

export default linksErrorReducer;