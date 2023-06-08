import React,{useEffect} from 'react'
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';

import { sample__video } from '../../constants';
import './Intro.css';
import Aos from 'aos';
import "aos/dist/aos.css";
const Intro = () => {

  useEffect(() => {
    Aos.init({duration:1000});
  },[]);


  const [playVideo, setPlayVideo] = React.useState(false);
  const vidRef = React.useRef();
  return (
    <div className="app__video" data-aos = "fade">
      <video
        ref={vidRef}
        src={sample__video}
        type="video/mp4"
        loop
        controls={false}
        // muted
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo(!playVideo);
            if (playVideo) {
              vidRef.current.pause();
            } else {
              vidRef.current.play();
            }
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
