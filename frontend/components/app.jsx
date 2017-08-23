import React from 'react';
import ProfileContainer from './profile_container';
import SessionFormContainer from './session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <div className="home-auth">
      <ProfileContainer />

    <switch>
      <AuthRoute path="/" component={SessionFormContainer} />
    </switch>

    </div>
  </div>
);

export default App;
