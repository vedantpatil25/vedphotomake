import React from 'react';
import Chef from '../Chef/Chef';
import { Navbar } from '../../components';
import { images } from '../../constants';
import Footer from '../Footer/Footer';
import FindUs from '../Findus/FindUs';
import './AboutUs.css';

const AboutUs = () => (
  <>

  <div className="app__aboutus app__bg flex__center section__padding" id="about">

    <div className="app__aboutus-content flex__center">

      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">At Ved Photo Make, we understand that every client is unique, and we strive to create a personalized experience for each one. From the initial consultation to the final product, we work closely with our clients to ensure that every detail is taken care of and that they are completely satisfied with the end result...</p>
        <a href="/portfolio">
        <button type="button" className="custom__button aboutus_portfolio-button">Know More</button>
        </a>
      </div>
    </div>
  </div>
  <Chef />
  <FindUs />
  <Footer />
  </>
);

export default AboutUs;
