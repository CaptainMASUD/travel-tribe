import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import s1 from './images/slider/s1.png';
import img1 from './images/slider/1.jpg'
import img3 from './images/slider/2.jpg';
import "./Components.css";

function Slider() {
  return (
    <>
      <Carousel className="slidermn"> 
        <Carousel.Item>
          <img src={s1} alt="First slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Sajek Valley</h3>
            <p>Nature's tranquil haven amidst Bangladesh's green hills.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img1} alt="Second slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Bandarban </h3>
            <p>Bandarban is a city in the Chittagong Hill Tracts of southeastern Bangladesh.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={img3} alt="Third slide" className="d-block w-100" />
          <Carousel.Caption>
            <h3>Kuakata</h3>

            <p>Kuakata beach is a sandy expanse 18 kilometres long and 3 kilometres wide. From the beach one can have an unobstructed view of both sunrise and sunset over the Bay of Bengal.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Slider;
