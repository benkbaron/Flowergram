import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <div className="home-auth">
      <h1 className="title">Flowergram</h1>
      <GreetingContainer />

    <switch>

      <AuthRoute path="/" component={SessionFormContainer} />
    </switch>
  </div>
  </div>
);

export default App;
