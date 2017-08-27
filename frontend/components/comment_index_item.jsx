import React from 'react';
import { withRouter } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <section>
        <li>{this.props.comment.author_id}</li>
        <li>{this.props.comment.body}</li>
      </section>
    );
  }
}

export default withRouter(CommentIndexItem);
