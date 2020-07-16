import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const PostCard = ({ title, text, timestamp, lastUpdate, id, slug }) => {
  return (
    <div className='card mb-3 postcard'>
      <div className='row no-gutters'>
        <div className='card-body'>
          <ReactMarkdown className='card-title'>{title}</ReactMarkdown>
          <ReactMarkdown classname='card-text' source={text}></ReactMarkdown>
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
            <Link to={'/api/posts/' + slug} className='btn btn-primary'>
              Read Post
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
