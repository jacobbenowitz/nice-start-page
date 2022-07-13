import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import linksErrorReducer from './links_errors_reducer';

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  links: linksErrorReducer,
})

export default errorsReducer;