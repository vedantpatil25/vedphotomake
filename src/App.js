import React from 'react';
import Login from './Login/Login';

import './App.css';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="/login" element = {<Login/>}/>
    </Routes>
  </div>
);

export default App;
