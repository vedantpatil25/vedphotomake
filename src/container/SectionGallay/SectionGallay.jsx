import React from "react";
import "./SectionGallay.css";
import { Navbar } from "../../components";
import gallery01 from "../../assets/gallary01.jpeg";
import gallery02 from "../../assets/gallary02.jpeg";
import gallery03 from "../../assets/gallary03.jpeg";
import gallery04 from "../../assets/gallary04.jpeg";
import gallery05 from "../../assets/gallary05.jpeg";
import gallery06 from "../../assets/gallary06.jpeg";
import gallery07 from "../../assets/gallary07.jpeg";
import gallery08 from "../../assets/gallary08.jpeg";
import gallery09 from "../../assets/gallary09.jpeg";
import gallery10 from "../../assets/gallary10.jpeg";
import gallery11 from "../../assets/gallary11.jpeg";
import gallery12 from "../../assets/gallary12.jpeg";
import gallery13 from "../../assets/gallary13.jpeg";


const SectionGallay = () => {
  return (
    <>
        <Navbar />
      <div className="wrapper app__bg">
        <div className="gallery">
          <div className="gallery__item gallery__item--1">
            <a href="#" className="gallery__link">
              <img
                src={gallery01}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--2">
            <a href="#" className="gallery__link">
              <img
                src={gallery02}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--3">
            <a href="#" className="gallery__link">
              <img
                src={gallery03}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--4">
            <a href="#" className="gallery__link">
              <img
                src={gallery04}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--5">
            <a href="#" className="gallery__link">
              <img
                src={gallery05}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          <div className="gallery__item gallery__item--6">
            <a href="#" className="gallery__link">
              <img
                src={gallery06}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--7">
            <a href="#" className="gallery__link">
              <img
                src={gallery07}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>

          <div className="gallery__item gallery__item--8">
            <a href="#" className="gallery__link">
              <img
                src={gallery08}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--9">
            <a href="#" className="gallery__link">
              <img
                src={gallery09}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--10">
            <a href="#" className="gallery__link">
              <img
                src={gallery10}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--11">
            <a href="#" className="gallery__link">
              <img
                src={gallery11}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--12">
            <a href="#" className="gallery__link">
              <img
                src={gallery12}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>
          
          <div className="gallery__item gallery__item--13">
            <a href="#" className="gallery__link">
              <img
                src={gallery13}
                className="gallery__image"
              />
              <div className="gallery__overlay">
                <span>Ved Photo Make</span>
              </div>
            </a>
          </div>

        </div>
      </div>
    </>
  );
};

export default SectionGallay;
