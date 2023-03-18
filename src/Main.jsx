import React from 'react'
import { AboutUs, Chef, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

const Main = () => {
  return (
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
  </div>
  )
}

export default Main