import { connect } from 'react-redux';
import { signup, logout, login } from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state, ownProps) => {
  const loggedIn = state.session.currentUser !== null;
  const errors = state.session.errors;
  return {loggedIn, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const formType = ownProps.location.pathname === "/login" ? login : signup;
  const processForm = (user) => dispatch(formType(user));
  return {processForm};
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
