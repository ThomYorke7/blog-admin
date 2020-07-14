import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/login';
import PostList from './components/posts/postlist';
import PostPage from './components/posts/postpage';
import CreatePost from './components/posts/createpost';
import EditPost from './components/posts/editpost';
import './bootstrap.min.css';
import './App.css';

function App() {
  // const [currentUser, setCurrentUser] = useState(
  //   JSON.parse(localStorage.getItem('currentUser'))
  // );
  return (
    <Router>
      <Switch>
        <Route path='/login' component={Login}></Route>
        <Route path='/' exact component={PostList}></Route>
        <Route path='/create' component={CreatePost}></Route>
        <Route path='/api/posts/:id' exact component={PostPage}></Route>
        <Route path='/api/posts/edit/:id' exact component={EditPost}></Route>
      </Switch>
    </Router>
  );
}

export default App;
