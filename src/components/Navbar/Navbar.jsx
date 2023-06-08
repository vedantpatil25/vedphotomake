import React,{useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);
  return (
    <nav className="app__navbar" data-aos="fade">
      <a href="https://vedphotomake.web.app/">
      <div className="app__navbar-logo">
        <img src={images.gericht} alt="app__logo" />
      </div>
      </a>
      
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <a href="/portfolio">Portfolio</a>
        </li>
        <li className="p__opensans">
          <a href="/aboutus">About</a>
        </li>
      </ul>
      <div className="app__navbar-login">
        <a href="/login" className="p__opensans">
          Log In
        </a>
        <div />

        <a href="/booking" className="p__opensans">
          Book Order
        </a>
      </div>
      
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#fff"
          fontSize={27}
          onClick={() => setToggleMenu(true)}
        />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <span
              fontSize={25}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            >
              X
            </span>
            <ul className="app__navbar-smallscreen_links">
              <li>
                <a href="/" onClick={() => setToggleMenu(false)}>
                  Home
                </a>
              </li>
              <li>
                <a href="/portfolio" onClick={() => setToggleMenu(false)}>
                  Portfolio
                </a>
              </li>
              <li>
                <a href="/aboutus" onClick={() => setToggleMenu(false)}>
                  About
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
