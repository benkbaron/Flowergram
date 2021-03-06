import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: "" };
    this.searchResults = this.searchResults.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);
    this.resetState = this.resetState.bind(this);
    this.linkHover = false;
  }

  handleMouseEnter() {
    this.linkHover = true;
  }

  handleMouseLeave() {
    this.linkHover = false;
  }

  resetState() {
    if (!this.linkHover){
      this.refs.searchInput.value = "";
      this.setState({search: ""});
    }
  }

  handleSearch() {
    if (this.state.search === "") {
      return [];
    }
    let filteredFollowedUsers = [];
    let filteredUsers = [];
    Object.values(this.props.users).forEach(user => {
      if (!user.user) {
        return;
      }
      if (((user.user.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) ||
      (user.user.full_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)) &&
      this.props.currentUser.user.followee_ids.includes(user.user.id)){
        filteredFollowedUsers.push(user);
      } else if ((user.user.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) ||
      (user.user.full_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1)) {
        filteredUsers.push(user);
      }
    });
    return filteredFollowedUsers.concat(filteredUsers);
  }

  componentWillReceiveProps(nextProps) {
    this.refs.searchInput.value = "";
    this.setState({search: ""});
  }

  searchResults() {
  let results = this.handleSearch().map((user) =>
    {
      return <li key={user.user.id}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        >
        <Link className="search-result-item" to={`/${user.user.id}`}>
          <img className="profile-pic-small" src={`${user.user.profile_pic}`}/>
          <div className="search-names">
            <div className="search-username">
              {user.user.username}
            </div>
            <div className="search-full-name">
              {user.user.full_name}
            </div>
          </div>
        </Link>
        </li>;
    });
  return <ul className="search-results">{results}</ul>;
  }

  update(input_field) {
    return event => this.setState({
      [input_field]: event.currentTarget.value
    });
  }

  render() {
    const currentUser = this.props.currentUser.user.id;
    return (
      <div className="nav-bar">
        <div className="nav-bar-contents">
          <Link to="/">
            <div className="nav-bar-left-contents">
                <img className="camera-icon" src={`${window.images.cameraIcon}`}/>
                <img className="flower-line-icon" src={`${window.images.flowerLineIcon}`}/>
                <div className="nav-title">Flowergram</div>
            </div>
          </Link>

          <div onBlur={this.resetState} className="search-area">
            <input onMouseEnter={this.handleMouseEnter}
              onMouseLeave={this.handleMouseLeave}
              ref="searchInput" className="search" type="text"
              onChange={this.update("search")} placeholder="Search"></input>
            {this.searchResults()}
          </div>

          <div className="nav-bar-right-contents">

            <Link to="/upload">
              <img className="upload-icon" src={`${window.images.uploadIcon}`}/>
            </Link>

            <Link to="/">
              <img className="heart-icon" src={`${window.images.heartIcon}`}/>
            </Link>

            <Link to={`/${currentUser}`}>
              <img className="person-icon" src={`${window.images.personIcon}`}/>
            </Link>

            <button className="log-out-button" onClick={this.props.logout}>Log Out</button>
          </div>
        </div>
      </div>);
    }
  }

export default NavBar;
