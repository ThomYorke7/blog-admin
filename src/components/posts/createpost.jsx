import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar';
import authHeader from '../../services/authHeader';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault(e);
    const post = { title, text };
    axios
      .post('http://localhost:5000/api/posts/create', post, {
        headers: {
          'Content-Type': 'application/json',
          Authorization: authHeader(),
        },
        mode: 'cors',
      })
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
            <small className='form-text text-muted mt-0'>
              You can use{' '}
              <a
                href='https://www.markdownguide.org/cheat-sheet/'
                target='_blank'
                rel='noopener noreferrer'
              >
                Markdown
              </a>
              .
            </small>
            <textarea
              name='text'
              className='form-control'
              id='text'
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>
          {/* <Editor
            apiKey={tinymceApi}
            initialValue={text}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount',
              ],
              toolbar:
                'undo redo | formatselect | bold italic backcolor | \
             alignleft aligncenter alignright alignjustify | \
             bullist numlist outdent indent | removeformat | help',
            }}
            onEditorChange={handleEditorChange}
          /> */}
          <button className='btn btn-primary mt-3'>Create Post</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
