import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndexHome from './post_index_home';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = { fetching: true };
  }

  componentDidMount(){
    this.props.getAllPosts().then(() => this.props.fetchAllUsers()).
      then(() => this.setState({fetching: false}));
  }

  followIcon(user){
    return (
      <ul>
        <li>{user.username}</li>
        <li>{user.full_name}</li>
        <li><img className="follow-pic" src={user.profile_pic}/></li>
      </ul>
    );
  }

  usersToFollow(){
    let users = this.props.users.filter((user) => {
      return (!this.props.currentUser.user.followee_ids.includes(user.user.id));
    });
    return (<ul className="follow-index">
    {users.map((user) =>
      <li key={user.user.id}>{this.followIcon(user.user)}</li>
    )}
    </ul>);
  }



  render() {
    if (!this.props.currentUser || this.state.fetching) {
      return (<div></div>);
    }
    if (this.props.postIndex)
      return (
        <div className="pic-index-homepage">
          {this.usersToFollow()}
          {PostIndexHome(this.props.postIndex, this.props.makeComment, this.props.currentUser)}
        </div>
      );
    }
  }

export default Homepage;
