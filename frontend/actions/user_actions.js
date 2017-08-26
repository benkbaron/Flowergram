import * as API_Utils from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = (payload) => {
  return {
    type: RECEIVE_USER,
    user: payload.user,
    posts: payload.posts
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
