import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Dashboard from './Dashboard';
import ComputeScore from './ComputeScore';
import Login from './Login';
import Register from './Register';

function App() {
  console.log('App component mounted');
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/score" element={<ComputeScore />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;