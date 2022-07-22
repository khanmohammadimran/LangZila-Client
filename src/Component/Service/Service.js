import React, { Component } from "react";
import Slider from "react-slick";
import './service.css'
export default class CenterMode extends Component {
  render() {
    const settings = {
      dots: true,
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
    };
    const mediaQuery = window.matchMedia('(max-width: 768px)')
    if (mediaQuery.matches) {
      settings.slidesToShow = 1;
      settings.centerPadding = "5px";

    }
    return (
      <div className="container mx-auto">

        <Slider {...settings}>
          <div className="slide ">
            <div className="inner-slide">
              <img className=" " src="img1.png" alt="" />
              <h2 className="slider-h">Infants</h2>
              <p className="slider-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>
          </div>
          <div className="slide">
            <div className="inner-slide">  <img src="img2.png" alt="" />
              <h2 className="slider-h">Language Training</h2>
              <p className="slider-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
            </div>

          </div>
          <div className="slide">
            <div className="inner-slide"> <img src="img3.png" alt="" />
              <h2 className="slider-h">Infants</h2><p className="slider-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>

          </div>
          <div className="slide">
            <div className="inner-slide">  <img src="img4.png" alt="" />
              <h2 className="slider-h">Infants</h2><p className="slider-p">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p></div>

          </div>

        </Slider>
      </div>
    );
  }
}
