import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function registerUser(e) {
    e.preventDefault();
    axios.get('http://localhost:4000/test')
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <div className="mt-4 grow flex items-center justify-around ">
      <div className="mb-64">
        <h1 className="text-4xl text-center">Register</h1>
        <form className="max-w-md mx-auto mt-4">
          <input type="text"
            placeholder={'Joe Doe'}
            value={name}
            onChange={(e) => setName(e.target.value)} />
          <input
            type="email" placeholder={'youremail@example.com'}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder={'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)} />
          <button
            className="primary"
            onClick={registerUser}>Register</button>
          <div className="text-center py-2 text-gray-500">
            Already have an Account?<Link className='underline text-black' to={'/login'}>Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegisterPage;
