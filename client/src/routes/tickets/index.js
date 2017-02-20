import React, { Component } from 'react';

export default class TicketsIndex extends Component{

  componentDidMount(){
    this.props.getTickets();
  }

  render(){
    return(
        <h1>{ this.props.text }</h1>
    );
  }

}
