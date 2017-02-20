import React, { Component } from 'react';
import TicketsList from '../../components/TicketsList/TicketsList.js'

export default class TicketsIndex extends Component{

  componentDidMount(){
    this.props.getTickets();
  }

  render(){
    return(
      <div>
        <h1>Tickets</h1>
        <TicketsList />
      </div>
    );
  }

}
