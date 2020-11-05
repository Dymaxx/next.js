import React from 'react';
import StyleSheet from 'react';

import Slider from "react-slick";
import "../node_modules/slick-carousel/slick/slick.css"; 
import "../node_modules/slick-carousel/slick/slick-theme.css";
export default function courasel(){
  
    const settings = {
        dots: false,
        infinite: true,
        speed: 10,
        adaptiveHeight:true,
        arrows:true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      };
      function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "absolute", background: "red",   }}
            onClick={onClick}
          />
        );
      }
      
      function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
          <div
            className={className}
            style={{ ...style, display: "block", background: "green" }}
            onClick={onClick}
          />
        );
      }
      return (
        <div className="w-11/12 h-100">
          <Slider {...settings} className="">
            <div>
              <img src="/img/bg1.jpg" />
            </div>
            <div>
            <img src="/img/bg2.jpg" />
            </div>
            <div>
            <img src="/img/bg3.jpg" />
            </div>
            <div>
            <img src="/img/bg4.jpg" />
            </div>
          </Slider>
        </div>
      );

    
  
}