import { combineReducers } from 'redux'
import session from './session_reducer'
import errorsReducer from './errors_reducer';
import linksReducer from './links_reducer';

const rootReducer = combineReducers({
  links: linksReducer,
  errors: errorsReducer,
  session: session,
})

export default rootReducer;