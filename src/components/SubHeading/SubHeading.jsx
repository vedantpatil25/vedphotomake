import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { images } from '../../constants';

const SubHeading = ({ title }) => {

  useEffect(() => {
    Aos.init({duration:500});
  },[]);

  return(
  <div style={{ marginBottom: '1rem' }} data-aos = "fade-up">
    <p className="p__cormorant" >{title}</p>
    <img src={images.spoon} alt="spoon_image" className="spoon__img" />
  </div>
)};

export default SubHeading;