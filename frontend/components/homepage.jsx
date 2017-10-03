import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';
import PostIndexHome from './post_index_home';

class Homepage extends React.Component {
  constructor(props){
    super(props);
    this.state = { fetching: true };
    this.handleFollow = this.handleFollow.bind(this);
  }

  componentDidMount(){
    this.props.getAllPosts().then(() => this.props.fetchAllUsers()).
      then(() => this.setState({fetching: false}));
  }

  handleFollow({followee}){
    return e => {
      e.preventDefault();
      this.props.createFollow(followee).then(this.props.getAllPosts);
    };
  }

  followIcon(user){
    return (
      <ul className="follow-item-contents">
        <Link to={`/${user.id}`} className="follow-item-data">
          <li><img className="follow-pic" src={user.profile_pic}/></li>
        </Link>
        <Link to={`/${user.id}`} className="follow-item-data username">
          <li >{user.username}</li>
        </Link>
        <li className="follow-item-data full-name">{user.full_name}</li>
        <li className="follow-item-data"><button onClick={this.handleFollow({followee: user})}>Follow</button></li>
      </ul>
    );
  }

  usersToFollow(){
    let users = this.props.users.filter((user) => {
      return ((!this.props.currentUser.user.followee_ids.includes(user.user.id)) &&
        (this.props.currentUser.user.id !== user.user.id));
    });
    return (
      <div className="follow-container">
        <span>Suggestions For You</span>

        <ul className="follow-index">
          {users.slice(0, 3).map((user) =>
            <li className="follow-user-item" key={user.user.id}>{this.followIcon(user.user)}</li>
          )}
        </ul>
      </div>
    );
  }

  render() {
    if (!this.props.currentUser || this.state.fetching) {
      return (<div></div>);
    } else if (this.props.postIndex === undefined){
      return (<div className="pic-index-homepage">
        {this.usersToFollow()}
      </div> );
    } else if (this.props.postIndex)
      return (
        <div className="pic-index-homepage">
          {this.usersToFollow()}
          <PostIndexHome posts={this.props.postIndex} makeComment={this.props.makeComment}
            currentUser={this.props.currentUser} />
        </div>
      );
    }
  }

export default Homepage;
