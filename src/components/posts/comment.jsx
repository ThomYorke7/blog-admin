import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Html5Entities } from 'html-entities';
import authHeader from '../../services/authHeader';

const Comment = ({ username, text, timestamp, id, postId }) => {
  const entities = new Html5Entities();
  const history = useHistory();
  const handleClick = () => {
    axios
      .delete(`http://localhost:5000/api/posts/${postId}/comments/${id}`, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader(),
        },
        mode: 'cors',
      })
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          history.push('/login');
        }
      });
  };

  return (
    <div className='card my-3 border-0'>
      <div className='row no-gutters border-bottom'>
        <div className='card-body p-0'>
          <button
            type='button'
            onClick={handleClick}
            className='close'
            aria-label='Close'
          >
            <span aria-hidden='true'>&times;</span>
          </button>
          <h5 className='card-title m-0'>{username}</h5>
          <p className='card-text m-0'>
            <small className='text-muted'>Posted on {timestamp}</small>
          </p>
          <p className='card-text my-2'>{entities.decode(text)}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
