import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NavBar extends React.Component {
  constructor(props){
    super(props);
    this.state = { search: "" };
    this.searchResults = this.searchResults.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch() {
    if (this.state.search === "") {
      return [];
    }
    let filteredUsers = Array.from(this.props.users).filter(user => {
      return (user.user.username.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1) || (user.user.full_name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1);
    });
    return filteredUsers;
  }

  componentWillReceiveProps(nextProps) {
    this.refs.searchInput.value = "";
    this.setState({search: ""});
  }

  searchResults() {
  let results = this.handleSearch().map((user) =>
    {
      return <li key={user.user.id}>
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

          <div className="search-area">
            <input ref="searchInput" className="search" type="text" onChange={this.update("search")} placeholder="Search"></input>
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
