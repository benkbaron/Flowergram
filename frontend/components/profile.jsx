import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndex from './post_index';

class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {fetching: true};
  }

  componentDidMount(){
    this.props.fetchUser(this.props.match.params.id).then(() => this.setState({fetching: false}));
  }

  componentWillReceiveProps(nextProps){
    if (!nextProps.user) {
      this.props.fetchUser(nextProps.match.params.id).then(() => this.setState({fetching: false}));
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
              </div>
          </div>
        <div>{PostIndex(posts)}</div>
      </div>
      );
    }
  };

export default Profile;
