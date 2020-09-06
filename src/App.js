import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';
import PostDetail from './components/PostDetail/PostDetail';
import { createContext } from 'react';
import Header from './components/Header/Header';
export const ImgUrlContext = createContext();

function App() {
  const [imgUrl, setImgUrl] = useState([]);
  const [postTime, setPostTime] = useState([]);

  return (
    <ImgUrlContext.Provider value = {[imgUrl, setImgUrl, postTime, setPostTime]}>
      <Router>
    <Header></Header>
        <Switch>
          <Route exact path={'/'}>
            <Home></Home>
          </Route>
          <Route path={'/post/:postId'}>
            <PostDetail/>
          </Route>
          <Route path={'*'}>
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </ImgUrlContext.Provider>
  );
}

export default App;
