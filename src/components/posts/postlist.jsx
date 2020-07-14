import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import PostCard from './postcard';
import Navbar from '../navbar';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem('currentUser'))
  );

  const history = useHistory();

  const handleLogout = () => {
    setCurrentUser('');
    localStorage.removeItem('currentUser');
    history.push('/login');
  };

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts/')
      .then((res) => {
        setPosts(res.data);
        setLoading(false);
      })
      .catch((err) => console.log({ message: err.message }));
  }, []);

  return (
    <React.Fragment>
      {currentUser ? (
        <div>
          <Navbar handleLogout={handleLogout}></Navbar>
          {loading && (
            <div className='text-center'>
              <div className='spinner-border text-dark m-5' role='status'>
                <span className='sr-only'>Loading...</span>
              </div>
            </div>
          )}
          <div className='container-fluid'>
            <div className='card-deck mt-4'>
              {posts.map((post) => (
                <PostCard
                  title={post.title}
                  text={post.text}
                  timestamp={post.timestamp}
                  lastUpdate={post.lastUpdate}
                  comments={post.comments}
                  key={post._id}
                  id={post._id}
                ></PostCard>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Redirect to='/login'></Redirect>
      )}
    </React.Fragment>
  );
};

export default PostList;
