import React, { useEffect } from 'react'
import { SubHeading } from '../../components'
import { images } from '../../constants'
import './Header.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Header = () => {
  useEffect(() => {
    Aos.init({ duration: 500 })
  }, [])

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info" data-aos="fade-right">
        <SubHeading title=" Green Disposal, Cash for Trash" />
        <h1 className="app__header-h1">EcoWasteCollect</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          EcoWasteCollect is your hassle-free solution for responsible e-waste
          disposal. Book a pickup, and we'll collect your electronic waste right
          from your doorstep while offering incentives in return. Help protect
          the environment and earn cash for your old gadgets today!
        </p>
        <a href="/booking">
          <button type="button" className="custom__button">
            Book Order
          </button>
        </a>
      </div>

      <div className="app__wrapper_img header__img">
        <img
          src={images.welcome}
          alt="header_img"
          className="header__img"
          data-aos="fade-left"
        />
      </div>
    </div>
  )
}

export default Header
