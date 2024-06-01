import React, { useState } from 'react';
import Form from './components/Form';
import Result from './components/Result';

const App = () => {
  const [result, setResult] = useState(null);

  const handleSubmit = async ({ employeeId, name, sentence }) => {
    try {
      const response = await fetch('http://localhost:5000/analyze', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ employeeId, name, sentence }),
      });
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <h1>Sentence Analyzer</h1>
      <Form onSubmit={handleSubmit} />
      {result && <Result wordCount={result.wordCount} mostFrequentWord={result.mostFrequentWord} sentiment={result.sentiment} />}
    </div>
  );
};

export default App;
