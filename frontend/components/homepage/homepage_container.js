import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { getAllPosts } from '../../actions/post_actions';
import { makeComment, deleteComment } from '../../actions/comment_actions';
import { createFollow } from '../../actions/follow_actions';
import { fetchAllUsers } from '../../actions/user_actions';
import Homepage from './homepage';
import { asArray } from '../../reducers/selectors';
import { createLike, deleteLike } from '../../actions/like_actions';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  const users = state.users;
  if (state.posts.index === undefined){
    return { currentUser, users };
  } else {
    let postIndex = asArray(state.posts.index);
    return { currentUser, postIndex, users };
  }
};

const mapDispatchToProps = (dispatch) => ({
  getAllPosts: () => dispatch(getAllPosts()),
  makeComment: (comment) => dispatch(makeComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
  fetchAllUsers: () => dispatch(fetchAllUsers()),
  createFollow: (user) => dispatch(createFollow(user)),
  logout: () => dispatch(logout()),
  createLike: (post) => dispatch(createLike(post)),
  deleteLike: (id) => dispatch(deleteLike(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
