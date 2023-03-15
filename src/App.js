import React from 'react';
import Login from './Login/Login';
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <Intro />
    <Gallery />
    <AboutUs />
    <SpecialMenu />
    <Chef />
    <FindUs />
    <Footer />
    <Login/>
  </div>
);

export default App;
