import React from 'react'
import { AboutUs, FindUs, Footer, Gallery, Header, Intro, Laurels, SpecialMenu } from './container';
import { Navbar } from './components';

const Main = (props) => {
  return (
    <div>
    <Header />
    <Intro />
    <Gallery />
    <SpecialMenu />
    <FindUs />
    <Footer />
  </div>
  )
}

export default Main