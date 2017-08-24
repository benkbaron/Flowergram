import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import navBar from './nav_bar';


const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout())
});

export default connect(null, mapDispatchToProps)(navBar);
