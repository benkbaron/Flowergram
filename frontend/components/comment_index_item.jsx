import React from 'react';
import { withRouter } from 'react-router-dom';
import { deleteComment } from '../actions/comment_actions';


class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.deleteComment();
  }

  deleteComment(){
    dispatch(deleteComment(this.props.comment));
  }

  deleteButton(){
    if (this.props.comment.author.username === this.props.currentUser.user.username){
      return (<form onSubmit={this.handleSubmit}><button>x</button></form>);
    }
  }
  render() {
    return (
      <section className="comment-content">
        <span>
          <li className="comment-author">{this.props.comment.author.username}</li>
          <li className="comment-body">{this.props.comment.body}</li>
        </span>
        {this.deleteButton()}
      </section>
    );
  }
}

export default withRouter(CommentIndexItem);
