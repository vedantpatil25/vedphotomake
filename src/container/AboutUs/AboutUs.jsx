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
        <p className="p__opensans">At EcoWasteCollect, our mission is to lead the charge in responsible e-waste disposal. We provide you with eco-friendly recycling solutions, convenient e-waste pickups, and the option to trade your old devices for newer, more sustainable ones. Our donation programs allow you to give your gadgets a second life, benefiting those in need. We're more than just a service; we're a community-driven initiative focused on reducing electronic waste's impact on the environment and creating a greener, cleaner world for all. Join us in making a positive change today...</p>
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
