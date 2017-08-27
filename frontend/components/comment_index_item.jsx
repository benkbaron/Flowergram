import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section className="comment-content">
        <li className="comment-author">{this.props.comment.author.username}</li>
        <li className="comment-body">{this.props.comment.body}</li>
      </section>
    );
  }
}

export default withRouter(CommentIndexItem);
