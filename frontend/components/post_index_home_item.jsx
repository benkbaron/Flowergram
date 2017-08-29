import React from 'react';
import { Link, withRouter } from 'react-router-dom';
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

  didUserLike(){
    let liked = false;
    const currentUser = this.props.currentUser;
    this.props.post.likers.forEach((liker) => {

      if (liker.liker_id === currentUser.user.id) {
        liked = true;
      }
    });
    if (liked){
    return <img className="heart-icon" src={`${window.images.redHeart}`}/>;
    } else {
    return <img className="heart-icon" src={`${window.images.heartIcon}`}/>;
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
      return (<div className="like-count">{`${number} ${like_s}`}</div>);
    }
  }

  likerList(){
    let list = [];
    let length = this.props.post.likers.length;
    if (length > 0) {
      let likeThis = (length > 1) ? " like this" : " likes this";
      this.props.post.likers.forEach((liker, idx) => {
        list.push(liker.user.username);
        if ((length > 1) && (idx === length - 2)) {
          list.push(" and ");
        } else if ((length > 1) && (idx < length - 2)){
          list.push(", ");
        }
      });
      list = list.join("");
      list += likeThis;
    }
    return (<div className="liker-list">{list}</div>);
  }

  caption(){
    if (this.props.post.caption){
      return (
        <section className="caption">
          <div className="caption-author">{this.props.post.author.username}</div>
          <div className="caption-body">{this.props.post.caption}</div>
        </section>
      );
    }
  }

  render() {
    return (
      <li className="homepage-post">
        <section className="post-header">
          <Link to={`/${this.props.post.author_id}`}>
            <img className="profile-pic-small" src={`${this.props.post.author.profile_pic}`}/>
          </Link>
          <Link to={`/${this.props.post.author_id}`}>
            <section>{this.props.post.author.username}</section>
          </Link>
        </section>
        <img className="pic" src={`${this.props.post.image}`}/>

        <section className="post-footer">
          <section className="like-comment-icons">

            <button onClick={this.handleLike} className="like-button">
              {this.didUserLike()}
            </button>
            <span><img className="speech-bubble-icon" src={`${window.images.speechBubbleIcon}`}/></span>
          </section>
          {this.likeCount()}
          {this.likerList()}
          {this.caption()}
          {CommentIndex(this.props.post, this.props.currentUser)}
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
