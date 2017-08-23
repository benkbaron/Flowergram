import { connect } from 'react-redux';
import { signup, logout, login, clearErrors } from '../actions/session_actions';
import SessionForm from './session_form';


const mapStateToProps = (state) => {
  const loggedIn = state.session.currentUser !== null;
  const errors = state.session.errors;
  return {loggedIn, errors};
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const clearAllErrors = () => dispatch(clearErrors());
  const formType = ownProps.location.pathname === "/login" ? login : signup;
  const processForm = (user) => dispatch(formType(user));
  return {processForm, clearAllErrors};
};

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);
