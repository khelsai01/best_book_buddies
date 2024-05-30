import React, { useRef } from "react";
import Slider from "react-slick";
import Carousel1 from "./carousels/Carousel1";
import CarouselPrice from "./carousels/CarouselPrice";
import ProfileCarousel from "./carousels/ProfileCarousel";

const CarouselSection = () => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    vertical: true,
    verticalSwiping: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500,
  };

  return (
    <div className="w-[300px] m-auto">
      <Slider {...settings}>
        <CarouselPrice />
        <Carousel1 />
        <ProfileCarousel />
        <CarouselPrice />
        <Carousel1 />
        <ProfileCarousel />
      </Slider>
    </div>
  );
};

export default CarouselSection;
