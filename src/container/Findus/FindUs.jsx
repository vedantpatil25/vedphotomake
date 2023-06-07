import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">Bijali Nagar, In the area of stadium , Deopur, Dhule, Pin Code : 414002</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Everyday: 09:00 am - 10:00 pm</p>
      </div>
      <a href="https://maps.app.goo.gl/FCPKEYhNrriBWdHg9?g_st=iw" target='_blank'>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}>Visit Us</button>
      </a>
      
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="findus_img" style={{ margin: '0',height: '500px',width:'375px' }}/>
    </div>
  </div>
);

export default FindUs;
