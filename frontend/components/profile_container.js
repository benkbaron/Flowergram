import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllPosts } from '../actions/post_actions';
import Profile from './profile';
import { asArray } from '../reducers/selectors';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const postIndex = asArray(state.posts.index);
  const postOrd = asArray(state.posts.ord);
  return { currentUser, postIndex, postOrd  };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
