import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './api';

function Login() {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await login(form);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 bg-white rounded shadow">
      <input type="text" placeholder="Username" onChange={(e) => setForm({ ...form, username: e.target.value })} className="input input-bordered w-full mb-4" />
      <input type="password" placeholder="Password" onChange={(e) => setForm({ ...form, password: e.target.value })} className="input input-bordered w-full mb-4" />
      <button type="submit" className="btn btn-primary w-full">Login</button>
    </form>
  );
}

export default Login;