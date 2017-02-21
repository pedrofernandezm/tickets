import React from 'react';

export default function TicketListItem({ ticket }){

  return(
    <td>{ticket.subject}</td>
    <td>{ticket.created_at}</td>
    <td>{ticket.aasm_state}</td>
  );
}
