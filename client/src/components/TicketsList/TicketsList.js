import React from 'react';
import { Table, Label } from 'react-bootstrap';

export default function TicketsList({ tickets }){

  var labelState = (state) => {
    switch(state){
      case 'opened':
        return 'danger';
      case 'pending':
        return 'warning';
      case 'resolved':
        return 'success';
      case 'solved':
        return 'default';
    }
  }

  return(
    <Table striped bordered condensed hover>
      <thead>
        <tr>
          <th>Subject</th>
          <th>Created at</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        { tickets.map(item =>
          <tr key={item.id}>
            <td>{item.attributes.subject}</td>
            <td>{item.attributes['created-at']}</td>
            <td><Label bsStyle={ labelState(item.attributes['aasm-state']) }>{item.attributes['aasm-state']}</Label></td>
          </tr>) }
      </tbody>
    </Table>
  );
}
