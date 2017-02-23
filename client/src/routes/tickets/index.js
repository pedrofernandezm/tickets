import React, { Component } from 'react';
import TicketsList from '../../components/TicketsList/TicketsList.js'

export default class TicketsIndex extends Component{

  componentDidMount(){
    if(location.pathname === "/agents/tickets"){
      this.props.getAgentTickets();
    }
  }

  render(){
    return(
      <div>
        <h1>Tickets</h1>
        <TicketsList tickets={this.props.tickets} />
      </div>
    );
  }

}
