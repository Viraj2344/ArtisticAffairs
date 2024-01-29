// HeroSection.js

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './herosection.css';

function HeroSection() {
  const images = [
    {
      desktop: 'http://artisticaffairs.co.in/images/heroSectionImages/Untitled%20design%20(31).jpg',
      mobile: 'https://slickstiles.com/cdn/shop/files/Celebrate_Love_1080x1080_8e60ff1b-8583-4155-bf6e-304d41c37dae.jpg?v=1701367568&width=800',
    },
    {
      desktop: 'https://slickstiles.com/cdn/shop/files/harry_potter_mockup_1_b3e64515-985d-4113-ada0-6e54f268e88f.jpg?v=1698595271&width=2400',
      mobile: 'https://slickstiles.com/cdn/shop/files/harry_potter_mockup_1_b3e64515-985d-4113-ada0-6e54f268e88f.jpg?v=1698595271&width=2400',
    },
    // Add more image URLs as needed
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'linear', // Add this property for linear fade transition
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className='bg-gradient-to-r from-gray-700 to-gray-900' key={index}>
            <img
              className='image custom-cursor'
              src={window.innerWidth <= 768 ? image.mobile : image.desktop}
              alt={`Slide ${index + 1}`}
            />
            <a href="/allproducts"><button className='shop-now-button rounded-full'>SHOP NOW !!!</button></a> 
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
