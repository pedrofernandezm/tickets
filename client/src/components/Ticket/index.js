import React from 'react';

export default function Ticket ({ ticket }) {
  return(
    <div>
      <h4>{ ticket.attributes.subject }</h4>
      <p>{ ticket.attributes.description }</p>
    </div>
  );
}
