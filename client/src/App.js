import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import LoginFormContainer from './components/LoginForm/LoginFormContainer.js';

class App extends Component {
  state = {
    tickets: []
  }

  getTickets = () => {
    return axios.get('/api/tickets', { headers: {'Content-Type': 'application/json'} } )
      .then((response) => {
        this.setState({
          tickets: response.data
        });
      });
  }

  render() {
    var propsObject = Object.assign({}, this.state, { getTickets: this.getTickets });
    return (
      <div className="App">
        { React.cloneElement(this.props.children, propsObject) }
      </div>
    );
  }
}

export default App;
