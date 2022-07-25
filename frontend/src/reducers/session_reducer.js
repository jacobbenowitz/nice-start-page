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
  // let nextState = merge({}, prevState)

  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      return {
        ...prevState,
        isAuthenticated: !!action.user.data,
        layout: action.user.data.layout,
        user: {
          id: action.user.data.id,
          firstName: action.user.data.firstName
        }
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