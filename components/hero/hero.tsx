import { MdOutlineEmail } from "react-icons/md";
import React from "react";

type Props = {};

function Hero({}: Props) {
  return (
    <div className="h-auto md:h-[500px] mt-20 md:mt-0 text-white max-w-7xl mx-auto md:items-end md:justify-between justify-start flex flex-col md:flex-row mb-28 px-4 md:px-0">
      <div className="w-full md:w-3/4 text-left md:mb-[-10px] h-full flex items-center md:items-end justify-start">
        <div>
          <span className="text-lg md:text-2xl">
            <p>I'm a dedicated full stack developer, passionate about</p>
            <p>challenges and always eager to tackle new projects,</p>
            <p>bringing innovative ideas to life.</p>
          </span>
          <h1 className="mt-10 text-6xl md:text-9xl ml-0 md:ml-[-5px]">
            Developer <br /> Full-Stack
          </h1>
        </div>
      </div>
      <button className="text-white text-sm border border-white px-4 py-4 w-44 md:w-36 mt-10 md:mt-0 flex items-center justify-center md:justify-start hover:text-black hover:bg-white">
        <MdOutlineEmail className="text-xl mr-2" />
        <a href="/contact">Contact Me</a>
      </button>
    </div>
  );
}

export default Hero;
