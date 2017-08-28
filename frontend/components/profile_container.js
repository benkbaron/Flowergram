import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import { fetchUser } from '../actions/user_actions';
import { createFollow, deleteFollow } from '../actions/follow_actions';
import Profile from './profile';
import { asArray } from '../reducers/selectors';

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
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
