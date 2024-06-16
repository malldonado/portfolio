import React from "react";
import Image from "next/image";

const Projects: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mx-auto max-w-7xl">
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer parallax">
          <Image
            src="/projects/1.png"
            alt="Project 1"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer parallax">
          <Image
            src="/projects/2.png"
            alt="Project 2"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer parallax">
          <Image
            src="/projects/3.png"
            alt="Project 3"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
        <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer parallax">
          <Image
            src="/projects/4.png"
            alt="Project 4"
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 ease-in-out transform group-hover:scale-110"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
