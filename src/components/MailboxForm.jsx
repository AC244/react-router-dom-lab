// src/components/MailboxForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const [boxholder, setBoxholder] = useState('');
  const [boxSize, setBoxSize] = useState('Small');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox({ boxholder, boxSize });
    navigate('/mailboxes'); // Redirect to the Mailboxes page
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="boxholder">Boxholder Name:</label>
        <input
          type="text"
          id="boxholder"
          value={boxholder}
          onChange={(e) => setBoxholder(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="boxSize">Box Size:</label>
        <select
          id="boxSize"
          value={boxSize}
          onChange={(e) => setBoxSize(e.target.value)}
        >
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
      </div>
      <button type="submit">Create Mailbox</button>
    </form>
  );
};

export default MailboxForm;
