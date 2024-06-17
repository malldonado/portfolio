"use client";

import { MdOutlineEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

function Hero({}: Props) {
  const [isHeadVisible, setIsHeadVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in viewport
  });

  useEffect(() => {
    if (inView) {
      setIsHeadVisible(true);
    }
  }, [inView]);

  return (
    <div className="h-auto md:h-screen mt-20 md:mt-0 text-white max-w-7xl mx-auto md:items-end md:justify-between justify-start flex flex-col md:flex-row mb-28 md:pb-60 px-4 md:px-0">
      <div ref={ref} className={`w-full md:w-3/4 text-left md:mb-[-20px] h-full flex items-center md:items-end justify-start ${isHeadVisible ? 'slide-in-head visible' : 'slide-in-head'}`}>
        <div>
          <span className="text-lg md:text-4xl">
            <p>I´m a dedicated full stack developer, passionate</p>
            <p>about challenges and always eager to tackle new</p>
            <p>projects, bringing innovative ideas to life.</p>
          </span>
          <h1 className="mt-10 text-6xl md:text-[150px] ml-0 md:ml-[-5px]">
            Developer <br /> Full-Stack
          </h1>
        </div>
      </div>
      <button className="text-white text-sm border border-white px-4 py-4 w-44 md:w-36 mt-10 md:mt-0 flex items-center justify-center md:justify-start hover:text-black hover:bg-white">
        <MdOutlineEmail className="text-xl mr-2" />
        <a href="mailto:matheusmaldonadosilva@outlook.com" target="_blank">Contact Me</a>
      </button>
    </div>
  );
}

export default Hero;

