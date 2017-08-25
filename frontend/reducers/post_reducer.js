import merge from 'lodash/merge';
import { ADD_POST, RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';


export const postReducer = (state = {index: {}, ord: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newPost;
  switch(action.type) {
    case ADD_POST:
      newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_POST:
      newPost = action.post;
      return action.post;
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case REMOVE_POST:
      newState[action.post.id].delete();
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {index: action.posts});
    default:
      return state;
  }
};
