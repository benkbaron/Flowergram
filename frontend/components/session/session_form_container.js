import { connect } from 'react-redux';
import { signup, logout, login, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => {
  const loggedIn = state.session.currentUser !== null;
  const errors = state.session.errors;
  return {loggedIn, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  clearAllErrors: () => dispatch(clearErrors()),
  processLoginForm: (user) => dispatch(login(user)),
  processSignupForm: (user) => dispatch(signup(user)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
