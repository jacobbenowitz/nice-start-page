import { merge } from 'lodash'
import { STATES } from 'mongoose';
import {
  RECEIVE_CURRENT_USER,
  RECEIVE_USER_LOGOUT,
  RECEIVE_USER_SIGN_IN
} from "../actions/session_actions";

const initialState = {
  isAuthenticated: false,
  user: {}
}

const sessionReducer = (prevState = initialState, action) => {
  Object.freeze(prevState)
  let nextState = merge({}, prevState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return {
        ...prevState,
        isAuthenticated: !!action.user,
        user: action.user
      }
    case RECEIVE_USER_LOGOUT:
      return initialState;
    case RECEIVE_USER_SIGN_IN:
      return {
        ...prevState,
        isSignedIn: true
      }
    default:
      return prevState;
  }
}

export default sessionReducer;