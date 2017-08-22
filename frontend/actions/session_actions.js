import * as API_Utils from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser
  };
};

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  };
};

export const signup = (user) => {
  return (dispatch) => {
    return API_Utils.signup(user)
    .then((user) => {
      return dispatch(receiveCurrentUser(user)),
      (error_list) => {
        return dispatch(receiveErrors(error_list.responseJSON));
      };
    });
  };
};

export const login = (user) => {
  return (dispatch) => {
    return API_Utils.login(user)
    .then((user) => {
      return dispatch(receiveCurrentUser(user)),
      (error_list) => {
        return dispatch(receiveErrors(error_list.responseJSON));
      };
    });
  };
};

export const logout = () => (dispatch) => {
  return API_Utils.logout()
  .then(() => dispatch(receiveCurrentUser(null)));
};
