import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from './profile_container';
import CommentIndex from './comment_index';


class PostIndexHomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "",
                   author_id: this.props.currentUser.user.id,
                   post_id: this.props.post.id
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    //Why not pass the method in straight form API Util here, and why is it preferable to pass as props and not arguments?
    this.props.makeComment(this.state).then(() => {
      return this.setState({body: ""});
    });
  }


  render() {
    return (
      <li>
        <section className="post-header">
          <img className="profile-pic-small" src={`${this.props.post.author.profile_pic}`}/>
          <section>{this.props.post.author.username}</section>
        </section>
        <img className="pic" src={`${this.props.post.image}`}/>

        <section className="post-footer">{CommentIndex(this.props.post.comments)}
          <form onSubmit={this.handleSubmit} className="comment-form">
            <input type="text" placeholder="Add a comment..."
                   onChange={this.update("body")}
                   value={this.state.body}
                   className="comment-input"></input>
          </form>
        </section>
      </li>
    );
  }
}

export default withRouter(PostIndexHomeItem);
