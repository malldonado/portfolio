"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const logos = [
  { src: '/logos/1.svg', alt: 'Logo 1' },
  { src: '/logos/2.svg', alt: 'Logo 2' },
  { src: '/logos/3.svg', alt: 'Logo 3' },
  { src: '/logos/4.svg', alt: 'Logo 4' },
  { src: '/logos/5.svg', alt: 'Logo 5' },
  { src: '/logos/6.svg', alt: 'Logo 6' },
  { src: '/logos/7.svg', alt: 'Logo 7' },
  { src: '/logos/8.svg', alt: 'Logo 8' },
  { src: '/logos/9.svg', alt: 'Logo 9' },
  { src: '/logos/10.svg', alt: 'Logo 10' },
  { src: '/logos/11.svg', alt: 'Logo 11' },
  { src: '/logos/12.svg', alt: 'Logo 12' },
  { src: '/logos/13.svg', alt: 'Logo 13' },
  { src: '/logos/14.svg', alt: 'Logo 14' },
  { src: '/logos/15.svg', alt: 'Logo 15' },
];

const settings = {
  infinite: true,
  slidesToShow: 8,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="text-white pt-24 sm:pt-32">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
            Skills
          </h2>
          {/* Uncomment below if you want to add a description */}
          {/* <p className="text-lg sm:text-2xl mb-8">
            Minhas habilidades abrangem tanto o desenvolvimento front-end quanto back-end
          </p> */}
        </div>
        <div className="mt-12 sm:mt-12 mx-[-15px]">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  className="max-h-20 sm:max-h-20 lg:max-h-24 mx-4 sm:mx-6"
                  src={logo.src}
                  alt={logo.alt}
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Skills;
