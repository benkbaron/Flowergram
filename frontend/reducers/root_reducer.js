import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer
});
