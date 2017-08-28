import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndex from './post_index';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {fetching: true};
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({fetching: false}));
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.user) {
      this.props.fetchUser(nextProps.match.params.id).then(() => this.setState({fetching: false}));
    }
  }

  handleFollow(e){
    e.preventDefault();
    let destroyId = false;
    const currentUser = this.props.currentUser.user;
    let allIds = currentUser.follower_ids.map((id) => {
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
    let allIds = this.props.currentUser.user.follower_ids.map((id) => {
      return id;
    });
    if (allIds.includes(this.props.user.id)){
      return "Unfollow";
    } else {
      return "Follow";
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
          </div>
        <div className="profile-pic-index">{PostIndex(posts)}</div>
      </div>
      );
    }
  };

export default Profile;
