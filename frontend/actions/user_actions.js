import * as API_Utils from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_PROFILE_PIC = "RECEIVE_PROFILE_PIC";

export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    posts: payload.posts
  };
};

export const receiveAllUsers = (users) => {
  return {
    type: RECEIVE_ALL_USERS,
    users
  };
};

export const receiveProfilePic = (pic) => {
  return {
    type: RECEIVE_PROFILE_PIC,
    pic
  };
};

export const fetchUser = (id) => {
  return (dispatch) => {
    return API_Utils.fetchUser(id)
    .then((user) => {
      return dispatch(receiveUser(user));
    });
  };
};

export const fetchAllUsers = () => {
  return (dispatch) => {
    return API_Utils.fetchAllUsers()
    .then((users) => {
      return dispatch(receiveAllUsers(users));
    });
  };
};

export const updateProfilePic = (data) => {
  return (dispatch) => {
    return API_Utils.updateProfilePic(data)
    .then((pic) => {
      return dispatch(receiveProfilePic(pic));
    });
  };
};
