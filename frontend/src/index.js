import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import jwt_decode from 'jwt-decode'
import { setAuthToken } from './util/session_api_util'
import { logout } from './actions/session_actions'
import axios from 'axios'

document.addEventListener("DOMContentLoaded", () => {
  let store;
  const root = document.getElementById('root')
  // if returning user has a token, set the token in the header
  if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken)
    const decodedUser = jwt_decode(localStorage.jwtToken)
    const preloadedState = {
      session: {
        isAuthenticated: true,
        user: decodedUser
      }
    }
    store = configureStore(preloadedState)
    const currentTime = Date.now() / 1000

    if (decodedUser.exp < currentTime) {
      store.dispatch(logout())
      window.location.href = '/#/login'
    }
  } else {
    store = configureStore()
  }
  /// testing start ///
  window.axios = axios
  window.getState = store.getState
  window.dispatch = store.dispatch
  /// testing end ///

  ReactDOM.render(<Root store={store} />, root)
})