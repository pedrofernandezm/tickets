import React, { Component } from 'react';
import Ticket from '../../components/Ticket';
import RepliesList from '../../components/Reply/RepliesList.js';

export default class ShowTicket extends Component{

  componentDidMount(){
    this.props.getTicket(this.props.params.id);
  }

  render(){
    return(
      <div className="ticket-page">
        <Ticket ticket={this.props.ticket} />
        <RepliesList replies={this.props.replies} />
      </div>
    );
  }


}
