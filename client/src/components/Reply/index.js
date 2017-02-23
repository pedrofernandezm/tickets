import React from 'react';

export default function ReplyItem ({ reply }) {
  return(
    <div className="reply-item">
      <span className="info">Posted by { reply.attributes.author}</span>
      <p className="message">{ reply.attributes.message }</p>
    </div>
  );
}
