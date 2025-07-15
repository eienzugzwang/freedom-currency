import React, { useState } from 'react';
import { computeScore } from './api';

function ComputeScore() {
  const [activity, setActivity] = useState('');
  const [result, setResult] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await computeScore({ activity });
      setResult(data);
    } catch (err) {
      alert('Error computing score');
    }
  };

  return (
    <div className="container mx-auto p-8">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-4 rounded shadow">
        <textarea placeholder="Describe activity" onChange={(e) => setActivity(e.target.value)} className="textarea textarea-bordered w-full mb-4"></textarea>
        <button type="submit" className="btn btn-primary w-full">Compute Score</button>
      </form>
      {result && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <p>Freedom Score: {result.score}</p>
          <p>Explanation: {result.explanation}</p>
        </div>
      )}
    </div>
  );
}

export default ComputeScore;