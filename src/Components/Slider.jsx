import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import s1 from './images/slider/s1.png';
import img1 from './images/img1.jpg'
import img3 from './images/img3.jpg';
import "./Components.css";

function Slider() {
  return (
    <>
      <Carousel className="slidermn"> 
        <Carousel.Item>
          <img src={s1} alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img1} alt="Second slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Third slide label</h3>

            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
