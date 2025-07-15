import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { register } from './api';

function Register() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(form);
      alert('Registered successfully');
      navigate('/login');
    } catch (err) {
      alert('Error registering');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded shadow">
      <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} className="input input-bordered w-full mb-4" />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} className="input input-bordered w-full mb-4" />
      <button type="submit" className="btn btn-primary w-full">Register</button>
    </form>
  );
}

export default Register;