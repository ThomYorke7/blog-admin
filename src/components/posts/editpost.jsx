import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar';
import authHeader from '../../services/authHeader';
import axios from 'axios';

const EditPost = (props) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  useEffect(() => {
    axios
      .get(
        'https://denim-mighty-script.glitch.me/api/posts/' +
          props.match.params.slug
      )
      .then((res) => {
        setTitle(res.data.decodedTitle);
        setText(res.data.decodedText);
        setLoading(false);
      })
      .catch((err) => console.log({ message: err.message }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const post = { title, text };
    axios
      .patch(
        'https://denim-mighty-script.glitch.me/api/posts/edit/' +
          props.match.params.slug,
        post,
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: authHeader(),
          },
          mode: 'cors',
        }
      )
      .then((res) => {
        if (res.status === 400) {
          setErrors(res);
          return;
        } else {
          history.push('/');
        }
      })
      .catch((err) => {
        if (err.response.status === 401) {
          history.push('/login');
        }
      });
  };

  return (
    <div>
      <Navbar></Navbar>
      {loading && (
        <div className='text-center'>
          <div className='spinner-border text-dark m-5' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
      {loading === false && (
        <div className='container mt-5'>
          {errors.length > 0
            ? errors.map((error) => (
                <p className='alert alert-warning mb-0 mt-4' key={error.msg}>
                  {error.msg}
                </p>
              ))
            : ''}
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className='form-group'>
              <label htmlFor='title'>Title</label>
              <input
                className='form-control'
                type='text'
                name='title'
                id='title'
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className='form-group'>
              <label htmlFor='text'>Content</label>
              <textarea
                name='text'
                className='form-control'
                id='text'
                value={text}
                onChange={(e) => setText(e.target.value)}
              ></textarea>
            </div>
            <button className='btn btn-primary mt-3'>Save Changes</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EditPost;
