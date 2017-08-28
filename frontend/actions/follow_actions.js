import * as API_Utils from '../util/follow_api_util';

export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";

export const removeFollow = (follower) => {
  return {
    type: REMOVE_FOLLOW,
    like
  };
};

export const addFollow = (follower) => {
  return {
    type: RECEIVE_FOLLOW,
    like
  };
};


export const createFollow = (follower) => {
  return (dispatch) => {
    return API_Utils.createFollow(follower)
    .then((follower) => {
      return dispatch(addFollow(follower));
    });
    };
  };


export const deleteFollow = (follow) => {
  return (dispatch) => {
    return API_Utils.deleteFollow(follow)
    .then((follower) => {
      return dispatch(removeFollow(follow));
    });
  };
};
