import * as API_Utils from '../util/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";


export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  };
};


export const fetchUser = (id) => {
  return (dispatch) => {
    return API_Utils.fetchUser(id)
    .then((user) => {
      return dispatch(receiveUser(user));
    },
    (error_list) => {
      return dispatch(receiveErrors(error_list.responseJSON));
    });
  };
};
