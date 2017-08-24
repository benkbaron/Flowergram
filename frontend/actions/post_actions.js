import * as API_Utils from '../util/post_api_util';

export const RECEIVE_POST = "RECEIVE_POST";
export const RECEIVE_ALL_POSTS = "RECEIVE_ALL_POSTS";
export const REMOVE_POST = "REMOVE_POST";
export const ADD_POST = "ADD_POST";

export const receivePost = (post) => {
  return {
    type: RECEIVE_POST,
    post
  };
};

export const receiveAllPosts = (posts) => {
  debugger
  return {
    type: RECEIVE_ALL_POSTS,
    posts
  };
};

export const removePost = (post) => {
  return {
    type: REMOVE_POST,
    post
  };
};

export const addPost = (post) => {
  return {
    type: ADD_POST,
    post
  };
};


export const fetchPost = (post) => {
  return (dispatch) => {
    return API_Utils.fetchPost(post)
    .then((user) => {
      return dispatch(receivePost(post));
    },
      (error_list) => {
        return dispatch(receiveErrors(error_list.responseJSON));
      });
    };
  };

export const makePost = (post) => {
  return (dispatch) => {
    return API_Utils.makePost(post)
    .then((post) => {
      return dispatch(addPost(post));
    },
      (error_list) => {
        return dispatch(receiveErrors(error_list.responseJSON));
      });
    };
  };

export const getAllPosts = () => {
  return (dispatch) => {
    return API_Utils.getAllPosts()
    .then((posts) => {
      return dispatch(receiveAllPosts(posts));
    },
    (error_list) => {
      return dispatch(receiveErrors(error_list.responseJSON));
    });
  };
};
export const deletePost = (post) => {
  return (dispatch) => {
    return API_Utils.deletePost(post)
    .then(() => {
      return dispatch(removePost(post));
    },
    (error_list) => {
      return dispatch(receiveErrors(error_list.responseJSON));
    });
  };
};
