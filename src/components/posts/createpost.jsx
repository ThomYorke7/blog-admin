import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../navbar';
import authHeader from '../../services/authHeader';
import axios from 'axios';
// import { Editor } from '@tinymce/tinymce-react';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [errors, setErrors] = useState([]);
  const history = useHistory();
  // const tinymceApi = process.env.REACT_APP_TINYMCE_API;

  // const handleEditorChange = (content, editor) => {
  //   setText(content);
  // };

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
        console.log(err);
      });
  };

  // const handleSubmit = async (e) => {
  //   try {
  //     e.preventDefault();
  //     const post = {
  //       title,
  //       text,
  //     };

  //     const request = await fetch('http://localhost:5000/api/posts/create', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         Authorization: authHeader(),
  //       },
  //       mode: 'cors',
  //       body: JSON.stringify(post),
  //     });

  //     const response = await request.json();
  //     if (request.status === 400) {
  //       setErrors(response);
  //       return;
  //     } else {
  //       history.push('/');
  //     }
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

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
