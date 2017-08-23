import React from 'react';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router';

export const Greeting = (props) => {

  if (props.currentUser) {
    return (
      <div>
        <p>{props.currentUser.username}</p>
        <button onClick={props.logout}>Log Out</button>
      </div>
    );
  }
  else {
    return (
      <div>

      </div>
    );}
  };

  export default Greeting;
