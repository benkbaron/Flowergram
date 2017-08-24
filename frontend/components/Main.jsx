import React from 'react';
import ProfileContainer from './profile_container';
import NavBarContainer from './nav_bar_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Main = () => (
  <div className="main">
    <NavBarContainer/>
      <switch>
        <Route path="/" component={ProfileContainer} />
      </switch>
  </div>
);

export default Main;
