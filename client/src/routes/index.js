import React from 'react';
import { Router, browserHistory } from 'react-router';

import LoginPage from './login';
import TicketsIndex from './tickets';
import App from '../App.js';
import auth from '../utils/auth.js';

export default function getRoutes() {
  var routes = {
    path: '/',
    indexRoute: { component: TicketsIndex },
    component: App,
    onEnter: checkAuthentication,
    childRoutes: [
      { path: 'login', component: LoginPage },
      { path: 'agents',
        childRoutes: [
          { path: 'tickets', component: TicketsIndex, onEnter: checkAuthentication }
        ]
      }
    ]
  };

  return (
    <Router history={browserHistory} routes={routes} />
  );

  function checkAuthentication(nextState, replace){
    if(location.pathname != "/login" && !auth.loggedIn()){
      replace({
        state: nextState,
        pathname: "/login"
      });
    }
  }

}
