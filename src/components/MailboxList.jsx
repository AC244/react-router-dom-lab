// src/components/MailboxList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <div className="mailbox-list">
      {mailboxes.map((mailbox) => (
        <Link to={`/mailboxes/${mailbox._id}`} key={mailbox._id} className="mail-box">
          <div>
            <p>Box Number: {mailbox._id}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MailboxList;
