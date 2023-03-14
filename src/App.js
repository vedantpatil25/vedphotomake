import React from 'react';

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
    {/* <Laurels /> */}
    <FindUs />
    <Footer />
  </div>
);

export default App;
