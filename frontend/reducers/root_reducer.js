import { combineReducers } from 'redux';
import { sessionReducer } from './session_reducer';
import { postReducer } from './post_reducer';
import { userReducer } from './user_reducer';

export const rootReducer = combineReducers({
  session: sessionReducer,
  posts: postReducer,
  users: userReducer
});
