// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/token', new URLSearchParams({
      username,
      password,
    }), {
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    })
    .then(response => {
      setToken(response.data.access_token);
    })
    .catch(error => {
      console.error('Login error:', error);
      alert('Incorrect username or password');
    });
  };
  return (
    <div className="max-w-sm mx-auto mt-20">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Login</h2>
      <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded shadow-lg">
        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          className="w-full p-2 mb-4 rounded bg-gray-700"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-indigo-500 hover:bg-indigo-600 text-white p-2 rounded" type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
