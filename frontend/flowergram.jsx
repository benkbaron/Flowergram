import React from 'react';
import ReactDOM from 'react-dom';
import * as API_Utils from './util/session_api_util';
import { login, logout, signup } from './actions/session_actions';
import { configureStore } from  './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const preloadedState = { session: { currentUser: window.currentUser }};
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }
  window.signup = signup;
  window.login = login;
  window.logout = logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={ store }/>, root);
});