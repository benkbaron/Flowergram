import React from 'react';
import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';
import { AuthRoute } from '../util/route_util';


const App = () => (
  <div>
    <div className="auth-flower">
    {/*  <img src="https://static.pexels.com/photos/54323/rose-composites-flowers-spring-54323.jpeg"/> */}
       </div>

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
