import React from 'react';
import SessionFormContainer from './session_form_container';
import Main from './Main';
import bottomNav from './bottomNav';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const App = () => (
  <div className="app">
    <div className="home-auth">
      <switch>
        <AuthRoute path="/" component={SessionFormContainer} />
        <ProtectedRoute path="/" component={Main} />
      </switch>
      {bottomNav()}
    </div>
  </div>
);

export default App;
