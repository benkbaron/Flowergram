import { connect } from 'react-redux';
import Upload from './upload';
import { makePost } from '../actions/post_actions';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser.user;
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  makePost: (post) => dispatch(makePost(post)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Upload);
