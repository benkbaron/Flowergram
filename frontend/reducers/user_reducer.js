import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_ALL_USERS, RECEIVE_PROFILE_PIC } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';
import { REMOVE_POST } from '../actions/post_actions';


export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    case RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      newState = merge({}, state, newUser);
      return newState;
    case RECEIVE_ALL_USERS:
      const newUsers = Object.assign([], action.users);
      newUsers.forEach( user => delete user.posts );
      return action.users;
    case RECEIVE_PROFILE_PIC:
      newState = merge({}, state);
      newState[action.pic.user.id].profile_pic = action.pic.user.profile_pic;
      return newState;
    case REMOVE_POST:
      newState = merge({}, state);
      let length = Object.keys(newState).length;
      const user = newState[action.post.post.author_id];
      user.post_ids = user.post_ids.filter( id => id !== action.post.post.id );
      if (user.posts) delete user.posts[action.post.post.id];
      return newState;

    default:
      return state;
  }
};
