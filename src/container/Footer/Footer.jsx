import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration:700});
  },[]);
return(
  <div className="app__footer section__padding" id="login">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext" data-aos = "fade-up">Contact Us</h1>
        <p className="p__opensans" data-aos = "fade-up">Sample streets, Pimpri Chinchwad, Pune - 401234</p>
        <p className="p__opensans" data-aos = "fade-up">+91 2222 444 111</p>
        <p className="p__opensans" data-aos = "fade-up">sample_id@mail.com</p>
      </div>

      <div className="app__footer-links_logo" data-aos = "fade-up">
        <img src={images.gericht} alt="footer_logo"/>
        <p className="p__opensans">&quot;Reduce, reuse, e-cycle.&quot;</p>
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work" data-aos = "fade-up">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Everyday:</p>
        <p className="p__opensans">09:00 AM - 08:00 PM</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">07:00 AM - 10:00 PM</p>
      </div>
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">Copyright ⓒ 2023 Vedant Patil. All Rights Reserved.</p>
    </div>

  </div>
)};

export default Footer;
