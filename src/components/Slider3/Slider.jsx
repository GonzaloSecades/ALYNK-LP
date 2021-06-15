import React, { Component } from "react";
import Slider from "react-slick";
import Download from "./Download";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none", background: "green" }}
      onClick={onClick}
    />
  );
}

export default class CustomArrows extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      adaptiveHeight: true,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
      
    };
    return (
      <div>
        <Slider {...settings} className='mt-6'>
          <Download/>
          <div>
            <a href="/productos#cedears">
            <img src="./images/slider/Cedears_big.png" alt="MEP" />
            </a>
          </div>
          <div>
            <a href="/productos#dolarmep">
            <img src="./images/slider/dolarmep_big.png" alt="MEP" />
            </a>
          </div>
          {/* <div>
            <img src="./images/slider/1.png" alt="MEP" className='h-screen object-cover'/>
          </div>
          <div>
            <img src="./images/slider/2.png" alt="MEP" className='h-screen object-fill'/>
          </div> */}
        </Slider>
      </div>
    );
  }
}

/*
CONTAINER (SLIDE)
width : 100%
height: VER LA HEIGHT

IMG
height: auto
width:100%
objec-fit:cover
*/