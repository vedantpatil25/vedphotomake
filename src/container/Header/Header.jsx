import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Making the memories that matters" />
      <h1 className="app__header-h1">Ved Photo Make</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Ved Photo Make is a professional photo studio that offers a wide range of photography services. With a team of skilled photographers and state-of-the-art equipment, they are committed to delivering exceptional quality and capturing every precious moment. Whether it's a wedding, corporate event, or portrait session.</p>
      <a href="/booking">
        <button type="button" className="custom__button">Book Order</button>
      </a>
      
    </div>

    <div className="app__wrapper_img header__img">
      <img src={images.welcome} alt="header_img" className='header__img'/>
    </div>
  </div>
);

export default Header;
