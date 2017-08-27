import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { getAllPosts } from '../actions/post_actions';
import { makeComment } from '../actions/comment_actions';
import Homepage from './homepage';
import { asArray } from '../reducers/selectors';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const postIndex = asArray(state.posts.index);
  return { currentUser, postIndex };
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  makeComment: (comment) => dispatch(makeComment(comment)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
