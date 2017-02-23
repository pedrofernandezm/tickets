import React, { Component } from 'react';
import axios from 'axios';
import { local } from 'storage.io';
import { browserHistory } from 'react-router';
import './App.css';
import AlertContainer from 'react-alert';

class App extends Component {

  state = {
    tickets: [],
    ticket: {
      attributes: {
        subject: "",
        description: ""
      }
    },
    replies: [],
    session: {
      token: "",
      expiresAt: "",
      userType: ""
    },
    alertOptions: {
      offset: 14,
      position: 'top right',
      theme: 'dark',
      time: 3000,
      transition: 'fade'
    }
  }

  requestHeaders = {
    'Content-Type': 'application/json',
    'Authorization': this.getToken()
  }

  getTicket = (id) => {
    var url = `/api/${this.state.session.userType}/tickets/${id}`;
    return axios.get(url, { headers: this.requestHeaders } )
      .then((response) => {
        this.getReplies(id);
        this.setState({
          ticket: response.data.data
        });
      })
  }

  getReplies = (ticketId) => {
    var url = `/api/tickets/${ticketId}/replies`;
    return axios.get(url, { headers: this.requestHeaders } )
      .then((response) => {
        this.setState({
          replies: response.data.data
        });
      })
  }

  getToken(){
    var token = local.get('token');
    if(token){
      return `Bearer ${token}`;
    }
    return '';
  }

  getTickets = () => {
    var userType = local.get('user-type');
    var url = `/api/${userType}/tickets`
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
      browserHistory.push('/tickets');
      this.msg.success('Signed in successfully');
    });
  }

  removeSessionAndRedirect = () => {
    local.remove('token');
    local.remove('expires-at');
    local.remove('user-type');
    browserHistory.push('/login');
  }

  createTicket = (subject, description) => {
    return axios.post(
      '/api/customers/tickets',
      {
        ticket: { subject: subject, description: description }
      },
      {
        headers: this.requestHeaders
      }
    ).then((response) => {
      this.msg.success("Ticket created successfully");
      browserHistory.push('/tickets');
    });
  }

  componentWillMount() {
    this.setState({
      session: {
        token: local.get('token'),
        expiresAt: local.get('expires-at'),
        userType: local.get('user-type')
      }
    });
  }

  render() {
    var propsObject = Object.assign(
      {},
      this.state,
      {
        getTickets: this.getTickets,
        getTicket: this.getTicket,
        login: this.login,
        createTicket: this.createTicket
      }
    );
    return (
      <div className="App container">
        <div className="row">
          <AlertContainer ref={a => this.msg = a} {...this.state.alertOptions} />
          { React.cloneElement(this.props.children, propsObject) }
        </div>
      </div>
    );
  }
}

export default App;
