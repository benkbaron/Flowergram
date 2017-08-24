import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';

class NavBar extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="nav-bar">
        <div>
          <img className="camera-icon" src={`${window.images.cameraIcon}`}/>
          <img className="pipe-icon" src={`${window.images.pipeIcon}`}/>
          <div className="nav-title">Instagram</div>
        </div>
        <input className="search" type="text" placeholder="Search"></input>
        <div className="right-nav-icons">
          <img className="upload-icon" src={`${window.images.uploadIcon}`}/>
          <img className="heart-icon" src={`${window.images.heartIcon}`}/>
          <img className="person-icon" src={`${window.images.personIcon}`}/>
          <button className="log-out-button" onClick={this.props.logout}>Log Out</button>
        </div>
      </div>)
    };
  }

export default NavBar;
