import React from 'react';
import { Table } from 'react-bootstrap';

export default function TicketsList({ tickets }){

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
            <td>{item.attributes['aasm-state']}</td>
          </tr>) }
      </tbody>
    </Table>
  );
}
