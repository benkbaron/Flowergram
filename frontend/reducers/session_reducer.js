import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      // return merge({}, state, { currentUser: action.currentUser, errors: []});
      newState = merge({}, state);
      newState.currentUser = action.currentUser;
      newState.errors = [];
      return newState;
    case RECEIVE_ERRORS:
      return merge({}, state, { errors: action.errors });
    case CLEAR_ERRORS:
      newState = merge({}, state);
      newState.errors = [];
      return newState;
    default:
      return state;
  }
};
