import React, { Component } from 'react';
import Ticket from '../../components/Ticket'

export default class ShowTicket extends Component{

  componentDidMount(){
    this.props.getTicket(this.props.params.id);
  }

  render(){
    return(
      <div className="ticket-page">
        <Ticket ticket={this.props.ticket} />
      </div>
    );
  }

}
