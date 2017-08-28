import * as API_Utils from '../util/like_api_util';

export const REMOVE_LIKE = "REMOVE_LIKE";
export const ADD_LIKE = "ADD_LIKE";

export const removeLike = (like) => {
  return {
    type: REMOVE_LIKE,
    like
  };
};

export const addLike = (like) => {
  return {
    type: ADD_LIKE,
    like
  };
};


export const createLike = (post) => {
  return (dispatch) => {
    return API_Utils.createLike(post)
    .then((newLike) => {
      return dispatch(addLike(newLike));
    });
    };
  };


export const deleteLike = (id) => {
  return (dispatch) => {
    return API_Utils.deleteLike(id)
    .then((like) => {
      return dispatch(removeLike(like));
    });
  };
};
