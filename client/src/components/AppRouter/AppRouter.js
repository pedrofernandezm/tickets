import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, Link, hashHistory} from 'react-router';

export default class AppRouter {
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="tickets" component={About} />
        </Route>
      </Router>
    );
  }
}
