import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { fetchUser, updateProfilePic } from '../../actions/user_actions';
import { createFollow, deleteFollow } from '../../actions/follow_actions';
import { makeComment, deleteComment } from '../../actions/comment_actions';
import { deletePost } from '../../actions/post_actions';
import Profile from './profile';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = (state, ownProps) => {
  const currentUser = state.session.currentUser;
  const user = state.users[ownProps.match.params.id];
  let posts;
  if (user) {
    posts = user.post_ids.map ((post_id) => {
      return state.posts.index[post_id];
    });
  }
  return { currentUser, user, posts };
};

const mapDispatchToProps = (dispatch) => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  createFollow: (follower) => dispatch(createFollow(follower)),
  deleteFollow: (follow) => dispatch(deleteFollow(follow)),
  makeComment: (comment) => dispatch(makeComment(comment)),
  deleteComment: (comment) => dispatch(deleteComment(comment)),
  updateProfilePic: (pic) => dispatch(updateProfilePic(pic)),
  deletePost: (post) => dispatch(deletePost(post)),
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
