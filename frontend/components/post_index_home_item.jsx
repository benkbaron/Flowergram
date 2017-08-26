import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from './profile_container';
import CommentIndex from './comment_index';

const commentState = { body: ""};


class PostIndexHomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = commentState;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    // this.props.makeComment(user);
  }

  render() {

    return (
      <li>
        <section className="post-header">
          <img className="profile-pic-small" src={`${this.props.post.author.profile_pic}`}/>
          <section>{this.props.post.author.username}</section>
        </section>
        <img className="pic" src={`${this.props.post.image}`}/>
        <section className="footer">{CommentIndex(this.props.post.comments)}</section>
        <form onSubmit={this.handleSubmit} className="comment-form">
          <input type="text" placeholder="Add a comment..."
                 onChange={this.update("body")}
                 value={this.props.body}></input>
        </form>
      </li>
    );
  }
}

export default withRouter(PostIndexHomeItem);
