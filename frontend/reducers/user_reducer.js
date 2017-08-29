import merge from 'lodash/merge';
import { RECEIVE_USER, RECEIVE_PROFILE_PIC } from '../actions/user_actions';
import { RECEIVE_FOLLOW, REMOVE_FOLLOW } from '../actions/follow_actions';


export const userReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch(action.type) {

    case RECEIVE_USER:
      const newUser = {[action.user.id]: action.user};
      newState = merge({}, state, newUser);
      return newState;
    case RECEIVE_PROFILE_PIC:
      newState = merge({}, state);
      newState[action.pic.user.id].profile_pic = action.pic.user.profile_pic;
      return newState;
    default:
      return state;
  }
};
