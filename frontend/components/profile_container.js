import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllPosts } from '../actions/post_actions';
import Profile from './profile';
import { asArray } from '../reducers/selectors';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const postIndex = asArray(state.posts.index); //make a selector to make object into an array. maybe use lodash's values method.
  const postOrd = asArray(state.posts.ord); //make a selector to make object into an array. maybe use lodash's values method.
  return { currentUser, postIndex, postOrd  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
