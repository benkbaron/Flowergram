import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndex from './post_index';
import Dropzone from 'react-dropzone';


class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {fetching: true, image: null, user_id: this.props.currentUser.user.id};
    this.handleFollow = this.handleFollow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({fetching: false}));
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.user) {
      this.props.fetchUser(nextProps.match.params.id).then(() => this.setState({fetching: false}));
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const pic = this.state.image;
    const user_id = this.state.user_id;
    this.props.updateProfilePic({pic, user_id}).then(() => this.setState({ image: null }));
  }

  onDrop(content) {
    this.setState({
      image: content[0]
    });
  }



  handleFollow(e){
    e.preventDefault();
    let destroyId = false;
    const currentUser = this.props.currentUser.user;
    let allIds = currentUser.followee_ids.map((id) => {
      return id;
    });
      if (allIds.includes(this.props.user.id)) {
        destroyId = this.props.user.id;
      }
    if (destroyId){
      this.props.deleteFollow(this.props.user);
    } else {
      this.props.createFollow(this.props.user);
    }
  }

  followButtonText(){
    let allIds = this.props.currentUser.user.followee_ids.map((id) => {
      return id;
    });
    if (allIds.includes(this.props.user.id)){
      return "Unfollow";
    } else {
      return "Follow";
    }
  }

  photoLoadedText() {
    if (this.state.image){
      return "Photo loaded! Click below to finalize.";
    } else {
      return "Only .jpeg and .png images will be accepted.";
    }
  }

  profilePicUpdate(){
    if (this.props.location.pathname === `/${this.props.currentUser.user.id}`) {
    return (<div className="upload-page">
      <Dropzone
        className="dropzone"
        accept="image/jpeg, image/png"
        onDrop={this.onDrop.bind(this)}
      >
        <p>Click here or drag and drop a photo to update profile picture.</p>
        <p><img className="flowerIcon" src={`${window.images.flowerIcon}`}/></p>
        <p>{this.photoLoadedText()}</p>
      </Dropzone>

        <form onSubmit={this.handleSubmit} >
          <button>Update Profile Picture</button>
        </form>
    </div>);
    }
  }


  render() {
    if (!this.props.user) {
      return (<div></div>);
    }

    const profile_pic = this.props.user.profile_pic;
    const username = this.props.user.username;
    const full_name = this.props.user.full_name;
    const posts = this.props.posts;
      return (
        <div className="profile-page">
          <div className="profile-top">
            <img className="profile-pic" src={profile_pic}/>
              <div className="profile-info">
                <h2 className="username">{username}</h2>
                <h3 className="full-name">{full_name}</h3>
                <button onClick={this.handleFollow} className="follow-button">{this.followButtonText()}</button>
              </div>

              <div>{this.profilePicUpdate()}</div>

          </div>
        <div className="profile-pic-index">{PostIndex(posts)}</div>
      </div>
      );
    }
  };

export default Profile;
