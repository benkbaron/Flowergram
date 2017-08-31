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
    this.redirectMouse = this.redirectMouse.bind(this);
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  redirectMouse(id) {
    document.getElementById(`comment-input${id}`).select();
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
    let list = (<ul></ul>);
    let length = this.props.post.likers.length;
    if (length > 0) {
      list =
        (<ul className="liker-list">
          {this.props.post.likers.map((liker, idx) => {
            if ((idx === length - 2) && length > 1)
              {
              return (<div key={liker.liker_id}>
                        <Link to={`/${liker.liker_id}`}>
                          <li>{liker.user.username}</li>
                        </Link>
                        <li className="little-like-word"> and </li>
                      </div>);
            } else if ((idx === length - 1) && length > 1)
              {
              return (<div key={liker.liker_id}>
                        <Link to={`/${liker.liker_id}`}>
                          <li>{liker.user.username}</li>
                        </Link>
                        <li className="little-like-word">like this</li>
                      </div>);
            } else if (length > 1)
              {
              return (<Link to={`/${liker.liker_id}`} key={liker.liker_id}>
                        <li>{liker.user.username},</li>
                      </Link>);
            } else {
              return (<div key={liker.liker_id}>
                        <Link to={`/${liker.liker_id}`}>
                          <li>{liker.user.username}</li>
                        </Link>
                        <li className="little-like-word">likes this</li>
                      </div>);
            }
          })}
        </ul>);
      }
    return (<div className="liker-container">{list}</div>);
  }

  caption(){
    if (this.props.post.caption){
      return (
        <section className="caption">
          <Link to={`/${this.props.post.author_id}`}>
            <div className="caption-author">{this.props.post.author.username}</div>
          </Link>
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
            <button onClick={() => this.redirectMouse(this.props.post.id)} className="comment-button-icon">
              <img id="speech-bubble-icon" className="speech-bubble-icon" src={`${window.images.speechBubbleIcon}`}/>
            </button>
          </section>

          {this.likeCount()}
          {this.likerList()}
          {this.caption()}
          {CommentIndex(this.props.post, this.props.currentUser)}
          <form onSubmit={this.handleSubmit} className="comment-form">
            <textarea type="text" placeholder="Add a comment..."
                  onKeyDown={(e) => {if (e.key === "Enter") {this.handleSubmit(e);}}}

                   onChange={this.update("body")}
                   value={this.state.body}
                   id={`comment-input${this.props.post.id}`}
                   className="comment-input"></textarea>
          </form>
        </section>

      </li>
    );
  }
}

export default withRouter(PostIndexHomeItem);
