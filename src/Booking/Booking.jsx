import React,{useEffect} from 'react'
import { useForm } from 'react-hook-form';
import Aos from 'aos';
import "aos/dist/aos.css";import "./Booking.css";
import { Navbar } from "../components";


const Booking = (props) => {
  const { register, handleSubmit, setValue } = useForm();
  
  useEffect(() => {
    Aos.init({duration:1500});
  },[]);


  //prepopulate the the name and email field if user is logged in 
  useEffect(() => {
    setValue('name', prepopulatedData.name);
    setValue('email', prepopulatedData.email);
  }, [setValue]);

  const prepopulatedData = {
    name: props.name,
    email: props.email,
  };

//not in use function just to using for prepopulating the data
  const onSubmit = () => {
    console.log("onsubmit is called");
  };

  return (
    <>
      <div className="main_bg">
        <div className="form1">
          <div className="form1-text">
            <h1 className="app__header-h1 booking__heading" data-aos = "fade-up">
              Book Now {props.name}
            </h1>
            <p className="p__cormorant" data-aos = "fade-up">
              Book Your order and we will contact you.
            </p>
          </div>
          <div className="main-form1">
            <form action="https://formspree.io/f/meqwbrwn" method="POST" onSubmit={handleSubmit(onSubmit)}>
              <div className="input__component" data-aos = "fade-up">
                <span>Name</span>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder={props.name}
                  {...register('name')}
                  required
                />
              </div>
              <div className="input__component" data-aos = "fade-up">
                <span>E-mail</span>
                <input
                  type="email"
                  name="email"
                  id="name"
                  {...register('email')}
                  placeholder={props.email}
                  required
                />
              </div>
              <div className="input__component" data-aos = "fade-up">
                <span>Type of Photo Shoot</span>
                <select name="type_of_photoshoot" id="people" required>
                  <option value=""></option>
                  <option value="marriage_photo_vid">
                    Marriage - Photo and Video Shoot
                  </option>
                  <option value="birthday">
                    Birthday - Photo and Video Shoot
                  </option>
                  <option value="birthday">Birthday - Photo Shoot</option>
                  <option value="personal_photo_vid">
                    Personal - Photo and Video Shoot
                  </option>
                  <option value="personal_photo">Personal - Photo Shoot</option>
                  <option value="prewedding_vid_photo">
                    Pre Wedding - Photo and Video Shoot
                  </option>
                  <option value="prewedding_photo">
                    Pre Wedding - Photo Shoot
                  </option>
                  <option value="home_fuction_photo_vid">
                    Home Function - Photo and Video Shoot
                  </option>
                  <option value="home_fuction_photo">
                    Home Function - Photo Shoot
                  </option>
                  <option value="photo_editing">Photo Editing</option>
                  <option value="photo_album">Photo Album</option>
                  <option value="digital_copies">Digital Copies</option>
                  <option value="storage">Storage</option>
                  <option value="other">other than these</option>
                </select>
              </div>
              <div className="input__component" data-aos = "fade-up">
                <span>Your Address</span>
                <input type="text" name="Address" id="time" required />
              </div>
              <div className="input__component" data-aos = "fade-up">
                <span>Date</span>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                  required
                />
              </div>
              <div className="input__component" data-aos = "fade-up">
                <span>Mobile Number</span>
                <input
                  type="number"
                  name="mobile_number"
                  id="number"
                  required
                />
              </div>
              <button id="submit" className="custom__button submit__button" data-aos = "fade-up">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
