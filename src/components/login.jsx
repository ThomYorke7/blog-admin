import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();
  const handleSubmit = async (e) => {
    e.preventDefault();
    // fetch url da modificare prima del push su Heroku
    const request = await fetch(
      'https://radiant-mesa-80114.herokuapp.com/api/admin/login',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        mode: 'cors',
        body: JSON.stringify({ username, password }),
      }
    );
    const currentUser = await request.json();
    if (currentUser.token) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
      history.push('/');
      window.location.reload();
      return;
    }
    setError(currentUser);
    setPassword('');
  };

  return (
    <div className='row mt-5'>
      <div className='col-md-4 m-auto'>
        <div className='card card-body'>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='username'>Username</label>
              <input
                type='text'
                className='form-control'
                id='username'
                required
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                className='form-control'
                id='password'
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type='submit' className='btn btn-primary'>
              Submit
            </button>
            {error !== '' && (
              <p className='alert alert-warning mb-0 mt-4'>{error.message}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
