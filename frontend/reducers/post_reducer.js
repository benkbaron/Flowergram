import merge from 'lodash/merge';
import { ADD_POST, RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';


export const postReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case ADD_POST:
      const newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_POST:
      return action.post;
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case REMOVE_POST:
      // FIX THIS
      return state;
    default:
      return state;
  }
};
