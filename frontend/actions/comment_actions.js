import * as API_Utils from '../util/comment_api_util';

export const REMOVE_COMMENT = "REMOVE_COMMENT";
export const ADD_COMMENT = "ADD_COMMENT";

export const removeComment = (comment) => {
  return {
    type: REMOVE_COMMENT,
    comment
  };
};

export const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  };
};

export const makeComment = (comment) => {
  return (dispatch) => {
    return API_Utils.makeComment(comment)
    .then((newComment) => {
      return dispatch(addComment(newComment));
    });
    };
  };

export const deleteComment = (comment) => {
  return (dispatch) => {
    return API_Utils.deleteComment(comment.id)
    .then(() => {
      return dispatch(removeComment(comment));
    });
  };
};
