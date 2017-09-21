import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import NavBar from './NavBar';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  return { currentUser };
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
