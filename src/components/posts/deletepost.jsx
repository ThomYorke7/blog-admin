import React from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import authHeader from '../../services/authHeader';

const DeletePost = ({ post, setDeleteModal }) => {
  const history = useHistory();
  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:5000/api/posts/` + post._id, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader(),
        },
        mode: 'cors',
      })
      .then((response) => {
        history.push('/');
        window.location.reload();
      })
      .catch((err) => {
        if (err.response.status === 401) {
          history.push('/login');
        }
      });
  };

  return (
    <form className='mt-3' onSubmit={(e) => handleDelete(e)}>
      <p className='alert alert-danger'>
        This will delete the post. Are you sure?
      </p>
      <button
        className='btn btn-secondary mr-2'
        onClick={() => setDeleteModal(false)}
      >
        Close
      </button>
      <button className='btn btn-primary' type='submit'>
        Confirm
      </button>
    </form>
  );
};

export default DeletePost;
