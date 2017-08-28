import * as API_Utils from '../util/follower_api_util';

export const REMOVE_FOLLOWER = "REMOVE_FOLLOWER";
export const RECEIVE_FOLLOWER = "RECEIVE_FOLLOWER";

export const removeFollower = (follower) => {
  return {
    type: REMOVE_FOLLOWER,
    like
  };
};

export const addFollower = (follower) => {
  return {
    type: RECEIVE_FOLLOWER,
    like
  };
};


export const createFollower = (follower) => {
  return (dispatch) => {
    return API_Utils.createFollower(follower)
    .then((follower) => {
      return dispatch(addFollower(follower));
    });
    };
  };


export const deleteFollower = (follower) => {
  return (dispatch) => {
    return API_Utils.deleteFollower(follower)
    .then((follower) => {
      return dispatch(removeFollower(follower));
    });
  };
};
