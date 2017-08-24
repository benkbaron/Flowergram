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
    debugger
  }

  render() {
    debugger
  if (!this.props.currentUser || this.state.fetching) {
    return (<div></div>);
  }
  if (this.props.postIndex)

    return (
      <div>
        <h1>{this.props.postIndex[0].caption}</h1>
        <img className="profile-pic" src={`${this.props.postIndex[0].image}`}/>
        <h2>{this.props.currentUser.username}</h2>
        <h3>{this.props.currentUser.full_name}</h3>
        <button onClick={this.props.logout}>Log Out</button>



        
      </div>
    );
  }
  };

export default Profile;
