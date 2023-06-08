import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import "./MenuItem.css";

const MenuItem = ({ title, description }) => {
useEffect(() => {
  Aos.init({duration:1500});
},[]);
return(
  <div className="app__menuitem" data-aos = "fade-up">
    <div className="app__menuitem-head">
      <div className="app__menuitem-name">
        <p className="p__cormorant" style={{ color: "#DCCA87" }}>
          {title}
        </p>
      </div>

    </div>

    <div className="app__menuitem-sub">
      <p className="p__opensans" style={{ color: "#AAAAAA" }}>
        {description}
      </p>
    </div>
  </div>
)};

export default MenuItem;
