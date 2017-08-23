import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { postReducer } from './post_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  post: postReducer
});
