import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { local } from 'storage.io';

class App extends Component {

  state = {
    tickets: [],
    session: {
      token: "",
      expiresAt: ""
    }
  }

  getTickets = () => {
    return axios.get('/api/tickets', { headers: {'Content-Type': 'application/json'} } )
      .then((response) => {
        this.setState({
          tickets: response.data.data
        });
      });
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
      var token = session['token'];
      var expiresAt = session['expires_at'];
      local.set('token', token);
      local.set('expiresAt', expiresAt);
      this.setState({
        session: {
          token: token,
          expiresAt: expiresAt
        }
      });
    });
  }

  componentWillMount() {
    this.setState({
      session: {
        token: local.get('token'),
        expiresAt: local.get('expiresAt')
      }
    });
  }

  render() {
    console.log(this.state);
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
