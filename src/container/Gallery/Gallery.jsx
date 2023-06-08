import React,{useEffect} from 'react'
import Aos from 'aos';
import "aos/dist/aos.css";
import { BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import AnimatedGallery  from '../../container/AnimatedGallary/AnimatedGallary';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const Gallery = () => {
  
  
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);


  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;

    if (direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery" id="gallary">
      <div className="app__gallery-content" data-aos = "fade-up">
        <SubHeading title="Photos" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: '#AAAAAA' }}>Our photo gallery showcases our passion for capturing beautiful and timeless moments. Browse through our collection to see our work and let us tell your story through our lens.</p>
      </div>

      <a href="/portfolio"><button type="button" className="custom__button gallary__buttons" data-aos = "fade-up">Click to see Portfolio</button></a>
      <a href="https://www.youtube.com/@vedphotojitupatil3518" target="_blank"><button type="button" className="custom__button" data-aos = "fade-up">Explore our YouTube</button></a>
      <AnimatedGallery />



      {/* <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {[images.gallery01, images.gallery02, images.gallery03, images.gallery04, images.gallery05, images.gallery06, images.gallery07, images.gallery08, images.gallery09, images.gallery10, images.gallery11, images.gallery12, images.gallery13].map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" className='rounded-corner'/>
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
      </div> */}


    </div>
  );
};

export default Gallery;
