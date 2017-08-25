import React from 'react';
import ProfileContainer from './profile_container';
import HomepageContainer from './homepage_container';
import NavBarContainer from './nav_bar_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Main = () => (
  <div className="main">
    <NavBarContainer/>
      <Switch>
        <Route path="/username" component={ProfileContainer} />
        <Route path="/" component={HomepageContainer} />
      </Switch>
  </div>
);

export default Main;
