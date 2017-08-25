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

  render() {
    if (this.state.fetching) {
      return (<div></div>);
    }

      return (
        <div className="profile-page">
          <div className="profile-top">
            <img className="profile-pic" src={this.props.user.profile_pic}/>
              <div className="profile-info">
                <h2 className="username">{this.props.user.username}</h2>
                <h3 className="full-name">{this.props.user.full_name}</h3>
              </div>
          </div>
        <div>{PostIndex(this.props.posts)}</div>
      </div>
      );
    }
  };

export default Profile;
