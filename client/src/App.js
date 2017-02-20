import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import LoginFormContainer from './components/LoginForm/LoginFormContainer.js';

class App extends Component {
  state = {
    text: "hola"
  }

  render() {
    return (
      <div className="App">
        { React.cloneElement(this.props.children, this.state) }
      </div>
    );
  }
}

export default App;
