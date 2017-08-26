import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from './profile_container';

class PostIndexHomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
  }

  render() {
    return (
      <li>
        <section className="post-header">
          <img className="profile-pic-small" src={`${this.props.post.author.profile_pic}`}/>
          <section>{this.props.post.author.username}</section>
        </section>
        <img className="pic" src={`${this.props.post.image}`}/>
      </li>
    );
  }
}

export default withRouter(PostIndexHomeItem);
