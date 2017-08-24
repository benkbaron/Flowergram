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
    this.props.getAllPosts().then(() => this.setState({fetching: false}));

  }

  render() {

    if (!this.props.currentUser || this.state.fetching) {
      return (<div></div>);
    }
    if (this.props.postIndex)

      return (
        <div className="profile-page">
          <img className="profile-pic" src={`${this.props.postIndex[0].image}`}/>
          <h2 className="username">{this.props.currentUser.username}</h2>
          <h3 className="full-name">{this.props.currentUser.full_name}</h3>
          <button onClick={this.props.logout}>Log Out</button>


          <div>{PostIndex(this.props.postIndex)}</div>

        </div>
      );
    }
  };

export default Profile;
