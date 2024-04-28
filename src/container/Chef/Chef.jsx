import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding chef__div">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.founder} alt="chef_image" className='founder__img' />
    </div>
    <div className="app__wrapper_info">
      {/* <SubHeading title="" /> */}
      <h1 className="headtext__cormorant">What we believe in</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">E-waste today, Earth's tomorrow.</p>
        </div>
        <p className="p__opensans">At EcoWasteCollect, we believe in the power of collective action to create a more sustainable future. We are committed to raising awareness about e-waste and offering accessible, environmentally responsible solutions. Our belief is rooted in the idea that by working together, we can reduce electronic waste, conserve resources, and protect our planet for generations to come. Join us in our mission to make a difference.</p>
      </div>

      <div className="app__chef-sign">
        <p>Founder Name</p>
        <p className="p__opensans"> - Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
