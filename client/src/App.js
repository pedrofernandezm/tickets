import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { local } from 'storage.io';
import { browserHistory } from 'react-router';
import './App.css';

class App extends Component {

  state = {
    tickets: [],
    session: {
      token: "",
      expiresAt: "",
      userType: ""
    }
  }

  requestHeaders = {
    'Content-Type': 'application/json',
    'Authentication': this.getToken()
  }

  getToken(){
    return local.get('token');
  }

  getTickets = () => {
    return axios.get('/api/tickets', { headers: this.requestHeaders } )
      .then((response) => {
        this.setState({
          tickets: response.data.data
        });
      })
  }

  loggedIn = () => {
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expiresAt'));
      var currentTime = new Date();
      return expirationTime > currentTime;
    }
    return false;
  }

  login = (email, password) => {
    return axios.post(
      '/api/sessions',
      { headers: {'Content-Type': 'application/json'},
        session: { email: email, password: password }
      }
    ).then((response) => {
      var data = response.data.data.attributes
      var session = jwtDecode(data['access-token']);
      var token = session.token;
      var expiresAt = session.expiresAt;
      var userType = session.type;
      local.set('token', token);
      local.set('expiresAt', expiresAt);
      local.set('userType', userType);
      browserHistory.push('/agents/tickets');
    });
  }

  componentWillMount() {
    if(!this.loggedIn()){
    }else{
      this.setState({
        session: {
          token: local.get('token'),
          expiresAt: local.get('expiresAt'),
          userType: local.get('userType')
        }
      });
    }
  }

  render() {
    var propsObject = Object.assign(
      {},
      this.state,
      {
        getTickets: this.getTickets,
        login: this.login
      }
    );
    return (
      <div className="App">
        { React.cloneElement(this.props.children, propsObject) }
      </div>
    );
  }
}

export default App;
