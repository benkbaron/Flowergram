import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import NavBar from './NavBar';

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(NavBar);
