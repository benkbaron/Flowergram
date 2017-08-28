import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NavBar extends React.Component {
  constructor(props){
    super(props);
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
          <input className="search" type="text" placeholder="Search"></input>
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
