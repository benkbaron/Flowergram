import React from 'react';
import ProfileContainer from './profile_container';
import HomepageContainer from './homepage_container';
import NavBarContainer from './nav_bar_container';
import UploadContainer from './upload_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

const Main = () => (
  <div className="main">
    <NavBarContainer/>
      <Switch>
        <Route exact path="/" component={HomepageContainer} />
        <Route path="/upload" component={UploadContainer} />
        <Route path="/:id" component={ProfileContainer} />
      </Switch>
  </div>
);

export default Main;
