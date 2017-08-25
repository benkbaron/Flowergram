import React from 'react';
import SessionFormContainer from './session_form_container';
import Main from './Main';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute, ProtectedRoute } from '../util/route_util';


const bottomNav = () => (
  <ul className="bottom-nav">
    <div className="bottom-nav-section">
      <li><a className="bottom-nav-links" href="https://www.linkedin.com/in/ben-baron-015381118">LINKED IN</a></li>
      <li><a className="bottom-nav-links" href="https://github.com/benkbaron">GIT HUB</a></li>
    </div>
    <div className="bottom-nav-section">
      <li className="bottom-nav-links">CREATED BY BEN BARON</li>
    </div>
  </ul>
);

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
