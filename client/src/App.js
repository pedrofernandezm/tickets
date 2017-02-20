import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import LoginFormContainer from './components/LoginForm/LoginFormContainer.js';

class App extends Component {
  state = {
    text: "hola"
  }

  getTickets = () => {
  return axios.get('/api/tickets', { headers: {'Content-Type': 'application/json'} })
      .then((response) => {
        this.setState({
          pokemonList: response.data.results,
          loadingList: false
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
