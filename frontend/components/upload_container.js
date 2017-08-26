import { connect } from 'react-redux';
import Upload from './upload';

const mapStateToProps = (state) => {
  const currentUser = state.session.currentUser;
  return { currentUser };
};


export default connect(mapStateToProps, null)(Upload);
