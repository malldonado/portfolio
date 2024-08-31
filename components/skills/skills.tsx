"use client";

import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'next/image';

const logos = [
  { src: '/logos/1.svg', alt: 'html' },
  { src: '/logos/2.svg', alt: 'css' },
  { src: '/logos/3.svg', alt: 'js' },
  { src: '/logos/4.svg', alt: 'sass' },
  { src: '/logos/5.svg', alt: 'tailwind' },
  { src: '/logos/6.svg', alt: 'bootstrap' },
  { src: '/logos/7.svg', alt: 'react' },
  { src: '/logos/8.svg', alt: 'next' },
  { src: '/logos/9.svg', alt: 'vue' },
  { src: '/logos/10.svg', alt: 'nodejs' },
  { src: '/logos/16.svg', alt: 'nest' },
  { src: '/logos/11.svg', alt: 'typescript' },
  { src: '/logos/12.svg', alt: 'php' },
  { src: '/logos/13.svg', alt: 'git' },
  { src: '/logos/14.svg', alt: 'mysql' },
  { src: '/logos/15.svg', alt: 'mongodb' },
  { src: '/logos/17.svg', alt: 'postgresql' },
  // { src: '/logos/18.svg', alt: 'graphql' },
  { src: '/logos/19.svg', alt: 'python' },
  { src: '/logos/20.svg', alt: 'django' },
  // { src: '/logos/21.svg', alt: 'aws' },
  // { src: '/logos/22.svg', alt: 'docker' },
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
        slidesToShow: 4,
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
        slidesToShow: 4,
        slidesToScroll: 1,
      },
    },
  ],
};

const Skills: React.FC = () => {
  return (
    <div className="text-white md:pt-32 sm:pt-44">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6">
            Skills
          </h2>
        </div>
        <div className="mt-12 sm:mt-12 mx-[-15px]">
          <Slider {...settings}>
            {logos.map((logo, index) => (
              <div key={index} className="flex justify-center">
                <Image
                  className="max-h-20 sm:max-h-20 lg:max-h-24 mx-4 sm:mx-6"
                  src={logo.src}
                  alt={logo.alt}
                  width={70}
                  height={70}
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
