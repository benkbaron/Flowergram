import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndex from './post_index';
import Dropzone from 'react-dropzone';


class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {fetching: true, image: null, imageURL: null,
      user_id: this.props.currentUser.user.id};

    this.handleFollow = this.handleFollow.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.updateFile = this.updateFile.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({fetching: false}));
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.user) {
      this.props.fetchUser(nextProps.match.params.id).then(() => this.setState({fetching: false}));
    }
  }

  updateFile(e) {
    let file = e.currentTarget.files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ image: file, imageURL: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const pic = this.state.image;
    const user_id = this.state.user_id;
    this.props.updateProfilePic({pic, user_id}).then(() => this.setState({ image: null, imageURL: null }));
  }

  onDrop(files) {
    let file = files[0];
    let fileReader = new FileReader();
    fileReader.onloadend = function () {
      this.setState({ image: file, imageURL: fileReader.result });
    }.bind(this);
    if (file) {
      fileReader.readAsDataURL(file);
    }
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

  followButton(){
    if (this.props.location.pathname !== `/${this.props.currentUser.user.id}`) {
    return (<button onClick={this.handleFollow} className="follow-button">
            {this.followButtonText()}</button>);
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


  profilePicUpdate(){
    if (this.props.location.pathname === `/${this.props.currentUser.user.id}`) {
    return (
      <div className="upload-profile-pic">
        <Dropzone
          className="dropzone"
          accept="image/jpeg, image/png"
          onDrop={this.onDrop.bind(this)}
        >
          {this.dropZoneProfileContents()}
        </Dropzone>

          <form onSubmit={this.handleSubmit} >
            <button>Update Profile Picture</button>
          </form>
      </div>);
    }
  }

  dropZoneProfileContents(){
    if (this.state.imageURL){
      return (<img className="dropzone-profile-pic" src={this.state.imageURL}/>);
    } else {
      return (<div className="dropzone-contents">
        <p>Select new profile picture</p>
        <p><img className="flowerIcon" src={`${window.images.flowerIcon}`}/></p>
    </div>);
    }
  }

  profileContent(){
    const profile_pic = this.props.user.profile_pic;
    const username = this.props.user.username;
    const full_name = this.props.user.full_name;
    const posts = this.props.posts;

    if (this.props.location.pathname === `/${this.props.currentUser.user.id}`) {
    return (
      <div className="profile-top">
      <div className="profile-top-component">
        <img className="profile-pic" src={profile_pic}/>
      </div>
      <div className="profile-top-component">
        <div className="profile-info">
          <h2 className="username">{username}</h2>
          <h3 className="full-name">{full_name}</h3>
          <div>{this.followButton()}</div>
        </div>
      </div>
      <div className="profile-top-component">
        {this.profilePicUpdate()}
      </div>
    </div>);
  } else {
    return ( <div>
      <div className="profile-top-component">
        <img className="profile-pic" src={profile_pic}/>
      </div>
      <div className="profile-top-component">
        <div className="profile-info">
          <h2 className="username">{username}</h2>
          <h3 className="full-name">{full_name}</h3>
          <div>{this.followButton()}</div>
        </div>
      </div>
    </div>);
  }


  }



  render() {
    if (!this.props.user) {
      return (<div></div>);
    }

    const posts = this.props.posts;
      return (
        <div className="profile-page">

          <div className="profile-top">
            {this.profileContent()}
          </div>

        <div className="profile-pic-index">
          <PostIndex posts={posts} currentUserId={this.props.currentUser.user.id}
              deletePost={this.props.deletePost} />
        </div>
      </div>
      );
    }
  }

export default Profile;
