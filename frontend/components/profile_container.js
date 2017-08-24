import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllPosts } from '../actions/post_actions';
import Profile from './profile';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
