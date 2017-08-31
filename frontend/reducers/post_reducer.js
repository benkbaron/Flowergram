import merge from 'lodash/merge';
import { ADD_POST, RECEIVE_POST, RECEIVE_ALL_POSTS, REMOVE_POST } from '../actions/post_actions';
import { RECEIVE_USER } from '../actions/user_actions';
import { ADD_COMMENT, REMOVE_COMMENT } from '../actions/comment_actions';
import { ADD_LIKE, REMOVE_LIKE } from '../actions/like_actions';


export const postReducer = (state = {index: {}, ord: []}, action) => {
  Object.freeze(state);
  let newState = merge({}, state);
  let newPost;
  let postId;
  switch(action.type) {
    case ADD_POST:
      newPost = {[action.post.id]: action.post};
      return merge({}, state, newPost);
    case RECEIVE_POST:
      return action.post;
    case RECEIVE_ALL_POSTS:
      return action.posts;
    case REMOVE_POST:
      delete newState.index[action.post.post.id];
      let newOrd = newState.ord.filter((id) => {
        return (id !== action.post.post.id);
      });

      newState.ord = newOrd;
      return newState;
    case RECEIVE_USER:
      return merge({}, state, {index: action.posts});

    case ADD_LIKE:
      newState.index[action.like.like.post_id].likers.push(action.like.like);
      return newState;
    case REMOVE_LIKE:
      postId = action.like.like.post_id;
      let newLikers = newState.index[postId].likers.filter((liker) => {
        return (liker.liker_id !== action.like.like.liker_id);});
      newState.index[postId].likers = newLikers;
      return newState;

    case ADD_COMMENT:
      postId = action.comment.comment.post_id;
      newState.index[postId].comments.push(action.comment.comment);
      return newState;
    case REMOVE_COMMENT:
      postId = action.comment.post_id;
      const newComments = newState.index[postId].comments.filter((comment) => {
        return (comment.id !== action.comment.id);
      });
      newState.index[postId].comments = newComments;
      return newState;

    default:
      return state;
  }
};
