import React from 'react';
import { Router, hashHistory } from 'react-router';

import LoginPage from './login';
import TicketsIndex from './tickets';
import App from '../App.js';

export default function getRoutes() {
  var routes = {
    path: '/',
    indexRoute: { component: TicketsIndex },
    component: App,
    childRoutes: [
      { path: 'login', component: LoginPage }
    ]
  };

  return (
    <Router history={hashHistory} routes={routes} />
  );
}
