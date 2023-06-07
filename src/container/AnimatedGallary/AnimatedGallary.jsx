import React from "react";
import "./AnimatedGallary.css";


 import gallery01 from "../../assets/gallary01.jpeg";
 import gallery02 from "../../assets/gallary02.jpeg";
 import gallery03 from "../../assets/gallary03.jpeg";
 import gallery04 from "../../assets/gallary04.jpeg";
 import gallery05 from "../../assets/gallary05.jpeg";
 import gallery06 from "../../assets/gallary06.jpeg";
 import gallery07 from "../../assets/gallary07.jpeg";
 import gallery08 from "../../assets/gallary08.jpeg";
 
 function AnimatedGallery() {
   return (
     <div className="animated__image-section app__aboutus app__bg flex__center section__padding">
       <div className="slider-img">
         <span style={{ "--i": 1 }}>
           <img src={gallery01} alt="" />
         </span>
         <span style={{ "--i": 2 }}>
           <img src={gallery02} alt="" />
         </span>
         <span style={{ "--i": 3 }}>
           <img src={gallery03} alt="" />
         </span>
         <span style={{ "--i": 4 }}>
           <img src={gallery04} alt="" />
         </span>
         <span style={{ "--i": 5 }}>
           <img src={gallery05} alt="" />
         </span>
         <span style={{ "--i": 6 }}>
           <img src={gallery06} alt="" />
         </span>
         <span style={{ "--i": 7 }}>
           <img src={gallery07} alt="" />
         </span>
         <span style={{ "--i": 8 }}>
           <img src={gallery08} alt="" />
         </span>
       </div>
     </div>
   );
 }
 
 export default AnimatedGallery;