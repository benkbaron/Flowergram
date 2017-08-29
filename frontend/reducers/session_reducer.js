import merge from 'lodash/merge';
import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS, CLEAR_ERRORS } from '../actions/session_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';

const defaultState = {
  currentUser: null,
  errors: []
};

export const sessionReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
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

    case RECEIVE_FOLLOW:
      newState = merge({}, state);
      let followeeId = action.followee.follow["followee_id"];
      newState.currentUser.user.followee_ids.push(followeeId);
      return newState;

    case REMOVE_FOLLOW:
      newState = merge({}, state);
      let newFollowerIds = newState.currentUser.user.followee_ids.filter((id) => {
        return (id !== action.followee.follow["followee_id"]);});
        newState.currentUser.user.followee_ids = newFollowerIds;
      return newState;

    default:
      return state;
  }
};
