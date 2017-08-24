import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import merge from 'lodash/merge';


export const navBar = () => {
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
        </div>
      </div>);

}
