import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  console.log('Home component rendered');
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-primary mb-4">Welcome to the Alignment Economy</h1>
      <p className="text-lg mb-6">
        Freedom is a universal ideal encapsulating human aspiration: Knowledge (understanding), Benevolence (ethics/compassion), Power (action), Vitality (renewal/longevity). It's an infinite journey of growth.
      </p>
      <p className="text-lg mb-6">
        Freedom Coin is a token in this economy, transferred for aligned activities. Use AI to compute Freedom Scores for actions, motivating ethical, sustainable choices over mere money.
      </p>
      <div className="flex space-x-4">
        <Link to="/login" className="bg-primary text-white px-4 py-2 rounded">Login</Link>
        <Link to="/register" className="bg-secondary text-white px-4 py-2 rounded">Register</Link>
      </div>
    </div>
  );
}

export default Home;