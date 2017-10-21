import React from 'react';
import ProfileContainer from './profile/profile_container';
import HomepageContainer from './homepage/homepage_container';
import NavBarContainer from './navbar/nav_bar_container';
import UploadContainer from './upload/upload_container';
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
