import React from 'react';
import { Link } from 'react-router-dom';
// import htmlParser from 'react-html-parser';

const PostCard = ({ title, text, timestamp, lastUpdate, id }) => {
  return (
    <div className='card mb-3 postcard'>
      <div className='row no-gutters'>
        <div className='card-body'>
          <h5 className='card-title'>{title}</h5>
          <p className='card-text'>{text}</p>
          <div className='card-footer'>
            <small className='text-muted'>Created: {timestamp}</small>
            {lastUpdate && (
              <small className='text-muted'>
                {' '}
                | Last Updated: {lastUpdate}
              </small>
            )}
          </div>
          <div className='d-flex justify-content-end mt-3'>
            <Link to={'/api/posts/' + id} className='btn btn-primary'>
              Read Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
