import * as APIUtil from '../util/session_api_util'
import jwt_decode from 'jwt-decode'

export const RECEIVE_USER_LOGOUT = "RECEIVE_USER_LOGOUT"
export const RECEIVE_USER_SIGN_IN = "RECEIVE_USER_SIGN_IN"
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER"
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS"

const logoutUser = () => ({
  type: RECEIVE_USER_LOGOUT
})

const receiveCurrentUser = user => ({
  type: RECEIVE_CURRENT_USER,
  user
})

const receiveUserSignIn = () => ({
  type: RECEIVE_USER_SIGN_IN
})

const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
})

export const singup = user => dispatch => (
  APIUtil.signup(user).then(() => {
    dispatch(receiveUserSignIn())
    dispatch(receiveCurrentUser(user))
  }, err => {
    dispatch(receiveErrors(err.response.data))
  })
);

export const login = user => dispatch => (
  APIUtil.login(user).then(res => {
    const { token } = res.data;
    localStorage.setItem('jwtToken', token);
    APIUtil.setAuthToken(token);
    const decoded = jwt_decode(token);
    dispatch(receiveCurrentUser(decoded))
  })
    .catch(err => {
      dispatch(receiveErrors(err.response.data));
    })
)

export const logout = () => dispatch => {
  localStorage.removeItem('jwtToken')
  APIUtil.setAuthToken(false)
  dispatch(logoutUser())
}

export const updateLayout = layout => dispatch => {
  APIUtil.patchLayout(layout).then(user =>
    dispatch(receiveCurrentUser(user)))
    .catch(err => dispatch(receiveErrors(err)))
};