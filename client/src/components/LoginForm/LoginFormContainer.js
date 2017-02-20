import React, { Component } from 'react';
import LoginForm from './LoginForm.js';

export default class LoginFormContainer extends Component {
  state = {
    emailInputValue: '',
    passwordInputValue: ''
  }

  onInputChange(event) {
    var name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  onFormSubmit(event){
    event.preventDefault();
    alert(JSON.stringify(this.state));
  }

  render() {
    return (
      <LoginForm onFormSubmit={this.onFormSubmit.bind(this)} onInputChange={this.onInputChange.bind(this)} emailInputValue={this.state.emailInputValue} passwordInputValue={this.state.passwordInputValue} />
    );
  }
}
