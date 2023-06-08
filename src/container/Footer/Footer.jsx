import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

// import { FooterOverlay, Newsletter } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);
return(
  <div className="app__footer section__padding" id="login" data-aos = "fade-up">
    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">Bijali Nagar, In The Area Of Stadium , Deopur, Dhule</p>
        <p className="p__opensans">+91 8888 646 888</p>
        <p className="p__opensans">jitupatil1381@gmail.com</p>
      </div>

      <div className="app__footer-links_logo" data-aos = "fade-up">
        <img src={images.gericht} alt="footer_logo"/>
        <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
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
