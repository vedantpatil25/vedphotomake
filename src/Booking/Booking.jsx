import React from "react";
import "./Booking.css";
import { Navbar } from "../components";

const Booking = (props) => {
  return (
    <>
      <Navbar />
      <div className="main_bg">
        <div className="form1">
          <div className="form1-text">
            <h1 className="app__header-h1 booking__heading">Book Now - {props.name}</h1>
            <p className="p__cormorant">
              Book Your order and we will contact you.
            </p>
          </div>
          <div className="main-form1">
            <form action="https://formspree.io/f/meqwbrwn" method="POST">
              <div className="input__component">
                <span>Name</span>
                <input type="text" name="name" id="name" placeholder= {props.name} required />
              </div>
              <div className="input__component">
                <span>E-mail</span>
                <input type="email" name="email" id="name" placeholder= {props.email} required />
              </div>
              <div className="input__component">
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
              <div className="input__component">
                <span>Your Address</span>
                <input type="text" name="Address" id="time" required />
              </div>
              <div className="input__component">
                <span>Date</span>
                <input
                  type="date"
                  name="date"
                  id="date"
                  placeholder="date"
                  required
                />
              </div>
              <div className="input__component">
                <span>Mobile Number</span>
                <input type="number" name="mobile_number" id="number" required />
              </div>
              <button id="submit" className="custom__button submit__button">
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
