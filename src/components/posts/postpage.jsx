import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../navbar';
import DeletePost from './deletepost';
import Comment from './comment';
import ReactMarkdown from 'react-markdown';

const PostPage = (props) => {
  const [post, setPost] = useState([]);
  const [decodedTitle, setDecodedTitle] = useState('');
  const [decodedText, setDecodedText] = useState('');
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [deleteModal, setDeleteModal] = useState(false);

  useEffect(() => {
    axios
      .get('http://localhost:5000/api/posts/' + props.match.params.slug)
      .then((res) => {
        setPost(res.data.post);
        setDecodedTitle(res.data.decodedTitle);
        setDecodedText(res.data.decodedText);
        setLoading(false);

        axios
          .get(`http://localhost:5000/api/posts/${res.data.post._id}/comments`)
          .then((res) => {
            setComments(res.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log({ message: err.message }));
  }, [post._id, props.match.params.id, props.match.params.slug]);

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
              <div className='card-body p-0'>
                <ReactMarkdown className='card-title'>
                  {decodedTitle}
                </ReactMarkdown>
                <ReactMarkdown
                  className='card-text'
                  source={decodedText}
                ></ReactMarkdown>
              </div>
              <div className='card-body p-0 mb-3'>
                <Link
                  to={'/api/posts/edit/' + post.slug}
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
              <h4>COMMENTS</h4>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <Comment
                    username={comment.username}
                    text={comment.text}
                    timestamp={comment.timestamp}
                    key={comment._id}
                    id={comment._id}
                    postId={post._id}
                  ></Comment>
                ))
              ) : (
                <p>There are no comments here.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PostPage;
