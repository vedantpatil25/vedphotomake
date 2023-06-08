import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => {
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);
  return(
  <div className="app__specialMenu section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="To capture and preserve life's precious moments through creative and timeless photography, and to become the go-to photo studio for high-quality photography services that exceed our clients' expectations" /> */}
      <h1 className="headtext__cormorant" data-aos = "fade-up">Services</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <div className="app__specialMenu_menu_items" data-aos = "fade-up">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title}  description={wine.description} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img service__img" data-aos = "fade-up">
        <img src={images.photographer} alt="photographer__img" data-aos = "fade-up"/>
      </div>


    </div>

  </div>
)};

export default SpecialMenu;
