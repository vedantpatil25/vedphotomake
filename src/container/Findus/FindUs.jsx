import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => {

  useEffect(() => {
    Aos.init({duration:900});
  },[]);

return(
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }} data-aos = "fade-up">Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans" data-aos = "fade-up">Sample Streets, Pimpri chinchwad, Pune - 411000</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }} data-aos = "fade-up">Opening Hours</p>
        <p className="p__opensans" data-aos = "fade-up">Everyday: 09:00 am - 10:00 pm</p>
      </div>
      <a href="https://maps.app.goo.gl/FCPKEYhNrriBWdHg9?g_st=iw" target='_blank'>
      <button type="button" className="custom__button findus__button" style={{ marginTop: '2rem' }} data-aos = "fade-up">Visit Us</button>
      </a>
      
    </div>

    <div className="app__wrapper_img findus_image" data-aos = "fade-up">
      <img src={images.findus} alt="findus_img" style={{ margin: '0',height: '500px',width:'375px', position:'relative', top:"55px"}} />
    </div>
  </div>
)};

export default FindUs;
