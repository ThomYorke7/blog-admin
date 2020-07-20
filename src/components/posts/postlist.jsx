import React, { useState, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import axios from 'axios';
import PostCard from './postcard';
import Navbar from '../navbar';
import { Html5Entities } from 'html-entities';

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const entities = new Html5Entities();

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
      .get('https://radiant-mesa-80114.herokuapp.com/api/posts/')
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
                  title={entities.decode(post.title)}
                  text={entities.decode(post.text)}
                  timestamp={post.timestamp}
                  lastUpdate={post.lastUpdate}
                  comments={post.comments}
                  key={post._id}
                  id={post._id}
                  slug={post.slug}
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
