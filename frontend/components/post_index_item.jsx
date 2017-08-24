import React from 'react';
import { withRouter } from 'react-router-dom';

import ProfileShowContainer from './profile_container';

class PostIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    return (
      <li></li>
    );
  }
}

export default withRouter(PostIndexItem);
