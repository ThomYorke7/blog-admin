import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import PostList from './components/posts/postlist';
import PostPage from './components/posts/postpage';
import CreatePost from './components/posts/createpost';
import EditPost from './components/posts/editpost';
import './bootstrap.min.css';
import './App.css';

function App() {
  return (
    <HashRouter basename='/'>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' exact component={PostList}></Route>
        <Route path='/create' component={CreatePost}></Route>
        <Route path='/api/posts/:slug' exact component={PostPage}></Route>
        <Route path='/api/posts/edit/:slug' exact component={EditPost}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
