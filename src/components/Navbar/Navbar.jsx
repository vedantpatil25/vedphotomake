import React,{useEffect} from 'react'
import { GiHamburgerMenu } from "react-icons/gi";
import images from "../../constants/images";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import Aos from 'aos';
import "aos/dist/aos.css";
import {signOut} from "firebase/auth"
import {auth} from "../../firebase"

const Navbar = (props) => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  useEffect(() => {
    Aos.init({duration:500});
  },[]);
  
  // console.log(props.isLoggedIn);
  var isLoggedIn = props.isLoggedIn;
  console.log(isLoggedIn);
  //sign out use function
  const userSignOut = ()=>
  {
    signOut(auth).then(() => {
      alert("User Signed Out");
    }).catch((error) => {
      alert("User Signed Out");
    });
  }


  return (
    <nav className="app__navbar">
      <a href="https://ecowastecollect.web.app/">
      <div className="app__navbar-logo">

        <img src={images.gericht} alt="app__logo" />
      </div>
      </a>
      
      <ul className="app__navbar-links">
        <li className="p__opensans">
          <a href="/">Home</a>
        </li>
        <li className="p__opensans">
          <a href="/portfolio">Event Gallary</a>
        </li>
        <li className="p__opensans">
          <a href="/aboutus">About</a>
        </li>
      </ul>
      
        <div className="app__navbar-login">
        {isLoggedIn?(
        <a href="/" className="p__opensans" onClick={userSignOut}>
        Log Out
      </a>
      ):(
        <a href="/login" className="p__opensans">
          Log In
        </a>
      )}
        
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
                  Event Gallary
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
