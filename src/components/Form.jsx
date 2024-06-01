import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [employeeId, setEmployeeId] = useState('');
  const [name, setName] = useState('');
  const [sentence, setSentence] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ employeeId, name, sentence });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee ID"
        value={employeeId}
        onChange={(e) => setEmployeeId(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Input Sentence"
        value={sentence}
        onChange={(e) => setSentence(e.target.value)}
      />
      <button type="submit">Analyze Sentence</button>
    </form>
  );
};

export default Form;
