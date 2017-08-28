import React from 'react';
import { withRouter } from 'react-router-dom';
import ProfileShowContainer from './profile_container';
import CommentIndex from './comment_index';
import { createLike, deleteLike } from '../actions/like_actions';


class PostIndexHomeItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { body: "",
                   author_id: this.props.currentUser.user.id,
                   post_id: this.props.post.id
                  };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLike = this.handleLike.bind(this);

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

  handleLike(e){
    e.preventDefault();
    let destroyId = false;
    const currentUser = this.props.currentUser;
    this.props.post.likers.forEach((liker) => {

      if (liker.liker_id === currentUser.user.id) {
        destroyId = liker.id;

      }
    });
    if (destroyId){
      this.deleteLike(destroyId);
    } else {
      this.createLike();
    }
  }

  createLike(){
    dispatch(createLike(this.props.post));
  }

  deleteLike(destroyId){
    dispatch(deleteLike(destroyId));
  }

  likeCount(){
    if (this.props.post.likers.length > 0){
      let number = this.props.post.likers.length;
      let like_s = number === 1 ? "like" : "likes";
      return (<div>{number} {like_s}</div>);
    }
  }

  render() {
    return (
      <li className="homepage-post">
        <section className="post-header">
          <img className="profile-pic-small" src={`${this.props.post.author.profile_pic}`}/>
          <section>{this.props.post.author.username}</section>
        </section>
        <img className="pic" src={`${this.props.post.image}`}/>

        <section className="post-footer">
          <section className="like-comment-icons">

            <button onClick={this.handleLike} className="like-button">
              <img className="heart-icon" src={`${window.images.heartIcon}`}/>
            </button>
            <span><img className="speech-bubble-icon" src={`${window.images.speechBubbleIcon}`}/></span>
          </section>
          {this.likeCount()}
          {CommentIndex(this.props.post.comments, this.props.currentUser)}
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
