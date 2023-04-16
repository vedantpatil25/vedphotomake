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
          <p className="p__opensans">Making The Memories That Matters...</p>
        </div>
        <p className="p__opensans">We believe in the power of photography to preserve memories and evoke emotions. We strive to capture those special moments that will be cherished for a lifetime. Our team of experienced photographers uses state-of-the-art equipment and techniques to create images that are not only beautiful but also meaningful.</p>
      </div>

      <div className="app__chef-sign">
        <p>Jitendra Patil</p>
        <p className="p__opensans">Photographer & Founder</p>
      </div>
    </div>
  </div>
);

export default Chef;
