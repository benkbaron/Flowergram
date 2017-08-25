import merge from 'lodash/merge';
import { RECEIVE_USER } from '../actions/user_actions';

const defaultState = {
  id: null,
  username: null,
  contact_info: null,
  full_name: null,
  post_ids: [],
  profile_pic: null,
  like_ids: [],
  follower_ids: []
};

export const userReducer = (state = defaultState, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      newState = merge({}, state, action.user);
      return newState;
    default:
      return state;
  }
};
