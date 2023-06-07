import React from 'react';
import Login from './Login/Login';
import Booking from './Booking/Booking';
import './App.css';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './container';
import SectionGallay from './container/SectionGallay/SectionGallay';

const App = () => (
  <div>
    <Routes>
      <Route path="/" element = {<Main/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/booking" element = {<Booking/>}/>
      <Route path="/aboutus" element = {<AboutUs/>}/>
      <Route path="/portfolio" element = {<SectionGallay/>}/>

    </Routes>
  </div>
);

export default App;
