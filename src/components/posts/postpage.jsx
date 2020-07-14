import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import DeletePost from './deletepost';

const PostPage = (props) => {
  const [post, setPost] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts/' + props.match.params.id)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => console.log({ message: err.message }));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <Navbar></Navbar>
      {loading && (
        <div className='text-center'>
          <div className='spinner-border text-dark m-5' role='status'>
            <span className='sr-only'>Loading...</span>
          </div>
        </div>
      )}
      {loading === false && (
        <div className='card border-0'>
          <div className='row no-gutters mt-4 justify-content-center'>
            <div className='col-lg-6'>
              <div className='card-body'>
                <h2 className='card-title'>{post.title}</h2>
                <p className='card-text'>{post.text}</p>
              </div>
              <div className='card-body py-0'>
                <Link
                  to={'/api/posts/edit/' + post._id}
                  className='btn btn-info mr-2'
                >
                  Edit
                </Link>
                <button
                  className='btn btn-danger'
                  onClick={() => setDeleteModal(true)}
                >
                  Delete
                </button>
                {deleteModal && (
                  <DeletePost
                    post={post}
                    setDeleteModal={setDeleteModal}
                  ></DeletePost>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostPage;
