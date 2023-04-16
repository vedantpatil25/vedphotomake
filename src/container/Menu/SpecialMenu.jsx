import React from 'react';

import { SubHeading, MenuItem } from '../../components';
import { data, images } from '../../constants';
import './SpecialMenu.css';

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding" id="menu">
    <div className="app__specialMenu-title">
      {/* <SubHeading title="To capture and preserve life's precious moments through creative and timeless photography, and to become the go-to photo studio for high-quality photography services that exceed our clients' expectations" /> */}
      <h1 className="headtext__cormorant">Services</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine  flex__center">
        <div className="app__specialMenu_menu_items">
          {data.wines.map((wine, index) => (
            <MenuItem key={wine.title + index} title={wine.title}  description={wine.description} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img service__img">
        <img src={images.photographer} alt="photographer__img" />
      </div>


    </div>

  </div>
);

export default SpecialMenu;
