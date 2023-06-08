import React, { useEffect } from 'react';
import { useState } from 'react';
import Login from './Login/Login';
import Booking from './Booking/Booking';
import './App.css';
import Main from './Main';
import { Routes, Route } from 'react-router-dom';
import { AboutUs } from './container';
import SectionGallay from './container/SectionGallay/SectionGallay';
import {auth} from './firebase';
import { Navbar } from './components';

const App = () => {

  const [userName,setUserName] = useState("");
  const [userEmail,setUserEmail] = useState("");
  const [isUserLoggedIn, setisUserLoggedIn] = useState (false);
    useEffect(() => 
    {
      auth.onAuthStateChanged((user) => 
      {
          if(user)
          {
            setUserName(user.displayName);
            setUserEmail(user.email);
            setisUserLoggedIn(true);
          }
          else
          {
            setUserName("");
            setUserEmail("");
            setisUserLoggedIn(false);
          }

      });
  },[]);

return (
  <div>
    <Navbar isLoggedIn = {isUserLoggedIn} />
    <Routes>
      <Route path="/" element = {<Main isLoggedIn = {isUserLoggedIn}/>}/>
      <Route path="/login" element = {<Login/>}/>
      <Route path="/booking" element = {<Booking name = {userName} email = {userEmail}/>}/>
      <Route path="/aboutus" element = {<AboutUs/>}/>
      <Route path="/portfolio" element = {<SectionGallay/>}/>

    </Routes>
  </div>
)};

export default App;
