import React, { Component } from 'react';
import axios from 'axios';
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
    'Authorization': this.getToken()
  }

  getToken(){
    var token = local.get('token');
    if(token){
      return `Bearer ${token}`;
    }
    return '';
  }

  getAgentTickets = () => {
    this.getTickets('/api/agents/tickets');
  }

  getTickets = (url) => {
    return axios.get(url, { headers: this.requestHeaders } )
      .then((response) => {
        this.setState({
          tickets: response.data.data
        });
      })
  }

  loggedIn = () => {
    var token = local.get('token');
    if ( Boolean(token) ) {
      var expirationTime = new Date(local.get('expires-at'));
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
      var data = response.data.data;
      var session = data.attributes;
      var token = session['access-token'];
      var expiresAt = session['expires-at'];
      var userType = data.relationships.user.data.type;
      local.set('token', token);
      local.set('expires-at', expiresAt);
      local.set('user-type', userType);
      browserHistory.push('/agents/tickets');
    });
  }

  componentWillMount() {
    if(!this.loggedIn()){
    }else{
      this.setState({
        session: {
          token: local.get('token'),
          expiresAt: local.get('expires-at'),
          userType: local.get('user-type')
        }
      });
    }
  }

  render() {
    var propsObject = Object.assign(
      {},
      this.state,
      {
        getAgentTickets: this.getAgentTickets,
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
