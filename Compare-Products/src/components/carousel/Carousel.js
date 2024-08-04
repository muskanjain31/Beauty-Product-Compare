import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/2.jpg';
import img2 from '../../assets/images/4.jpg';
import img3 from '../../assets/images/5.jpg';
import arrow from '../../assets/images/arrow.png';
import './carousel.css'; // Import CSS file for styling
import { useRef } from 'react';


function CarouselPage() {
  return (
    <div>
      <Carousel interval={2000}>
        <Carousel.Item>
          <img className='d-block w-100' src={img1} alt='First slide' />
          <Carousel.Caption className="carousel-text">
            <h3 >Beauty Comparison</h3>
            <p>Made Easy</p>
            <button className='btn-1'>Explore</button>
          </Carousel.Caption>
          {/* <img className='arrow' src={arrow} /> */}

        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img2} alt='Second slide' />
          <Carousel.Caption className="carousel-text">
            <h3 >Compare, Choose</h3>
            <p > Conquer</p>
            <button className='btn-1'>Explore</button>
          </Carousel.Caption>
            {/* <img className='arrow' src={arrow} /> */}

        </Carousel.Item>
        <Carousel.Item>
          <img className='d-block w-100' src={img3} alt='Third slide' />
          <Carousel.Caption className="carousel-text">
            <h3 >Discover Your Perfect </h3>
            <p>Beauty Match</p>
            <button className='btn-1'>Explore</button>
          </Carousel.Caption>
          {/* <img className='arrow' src={arrow} /> */}

        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default CarouselPage;



