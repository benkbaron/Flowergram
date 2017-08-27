import merge from 'lodash/merge';
import { ADD_POST, RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';


export const postReducer = (state = {index: {}, ord: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newPost;
  switch(action.type) {
    case ADD_POST:
      newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_POST:
      return action.post;
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case REMOVE_POST:
      newState[action.post.id].delete();
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {index: action.posts});


    case ADD_LIKE:
    newState.index[action.like.like.post_id].likers.push(action.like.like.liker_id);
      return newState;
    case REMOVE_LIKE:
      return state;


    case ADD_COMMENT:
      const post_id = action.comment.comment.post_id;
      newState.index[post_id].comments.push(action.comment.comment);
      return newState;
    case REMOVE_COMMENT:
      const postId = action.comment.post_id;

      const newComments = newState.index[postId].comments.filter((comment) => {
        return (comment.id !== action.comment.id);
      });
      newState.index[postId].comments = newComments;
      return newState;
    default:
      return state;
  }
};
