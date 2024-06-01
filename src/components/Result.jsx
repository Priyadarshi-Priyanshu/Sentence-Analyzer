import React from 'react';

const Result = ({ wordCount, mostFrequentWord, sentiment }) => {
  return (
    <div>
      <p>Word Count: {wordCount}</p>
      <p>Most Frequent Word: {mostFrequentWord}</p>
      <p>Sentiment of the Word : {sentiment}</p>
    </div>
  );
};

export default Result;
