import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpg';

export default class TopCarousel extends Component {
    render() {
        return (
            <div className="carousel">
              <Carousel
                showThumbs={false}
                transitionTime={1000}
                autoPlay={true}
                infiniteLoop={true}
                dynamicHeight={true}>
                  <div className="carousel-content">
                      <img src={img1} />
                  </div>
                  <div className="carousel-content">
                      <img src={img2} />
                  </div>
                  <div className="carousel-content">
                      <img src={img3} />
                  </div>
              </Carousel>
            </div>

        );
    }
}
