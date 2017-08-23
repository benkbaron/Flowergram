import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export const Profile = (props) => {

  if (!props.currentUser) {
    return (<div></div>);
  }
    return (
      <div>
        <h2>{props.currentUser.username}</h2>
        <h3>{props.currentUser.full_name}</h3>
        <p>{props.caption}</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  };

  export default Profile;
