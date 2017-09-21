import * as API_Utils from '../util/follow_api_util';

export const REMOVE_FOLLOW = "REMOVE_FOLLOW";
export const RECEIVE_FOLLOW = "RECEIVE_FOLLOW";

export const removeFollow = (followee) => {
  return {
    type: REMOVE_FOLLOW,
    followee
  };
};

export const addFollow = (followee) => {
  return {
    type: RECEIVE_FOLLOW,
    followee
  };
};

export const createFollow = (followee) => {
  return (dispatch) => {
    return API_Utils.createFollow(followee)
    .then((followee) => {
      return dispatch(addFollow(followee));
    });
    };
  };

export const deleteFollow = (followee) => {
  return (dispatch) => {
    return API_Utils.deleteFollow(followee)
    .then((follow) => {
      return dispatch(removeFollow(follow));
    });
  };
};
