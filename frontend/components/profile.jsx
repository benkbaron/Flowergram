import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

class Profile extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
  if (!this.props.currentUser) {
    return (<div></div>);
  }

    return (
      <div>
        <h2>{this.props.currentUser.username}</h2>
        <h3>{this.props.currentUser.full_name}</h3>
        <button onClick={this.props.logout}>Log Out</button>
      </div>
    );
  }
  };

export default Profile;
