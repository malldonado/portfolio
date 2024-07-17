"use client";

import { MdOutlineEmail } from "react-icons/md";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  language: string;
};

function Hero({ language }: Props) {
  const [isHeadVisible, setIsHeadVisible] = useState(false);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  useEffect(() => {
    if (inView) {
      setIsHeadVisible(true);
    }
  }, [inView]);

  return (
    <div className="h-auto lg:h-screen mt-10 md:mt-20 lg:mt-0 text-white max-w-7xl mx-auto md:items-end md:justify-between justify-start lg:flex flex-col md:flex-row mb-28 md:pb-16 lg:pb-60 px-4 md:px-0 md:gap-8">
      <div
        ref={ref}
        className={`w-full md:w-3/4 text-left md:mb-[-20px] h-full flex items-center md:items-end justify-start ${
          isHeadVisible ? "slide-in-head visible" : "slide-in-head"
        }`}
      >
        <div className="pr-4 md:pr-0">
          <span className="text-xl md:text-4xl pr-4">
            <p>
              {language === "en"
                ? "I’m a dedicated full stack developer, passionate about challenges and always eager to tackle new projects, bringing innovative ideas to life."
                : "Sou um desenvolvedor full stack dedicado, apaixonado por desafios e sempre ansioso para enfrentar novos projetos, trazendo ideias inovadoras à vida."}
            </p>
          </span>
          <h1 className="mt-10 text-5xl md:text-[150px] ml-0 md:ml-[-5px]">
            {language === "en" ? "Developer" : "Desenvolvedor"} <br />
            Full-Stack
          </h1>
        </div>
      </div>
      <button className="text-white text-sm border border-white px-4 py-4 w-36 md:w-36 mt-10 lg:mt-0 flex items-center justify-center md:justify-start hover:text-black hover:bg-white">
        <MdOutlineEmail className="text-xl mr-2" />
        <a href="mailto:matheusmaldonadosilva@outlook.com" target="_blank">
          {language === "en" ? "Contact Me" : "Contato"}
        </a>
      </button>
    </div>
  );
}

export default Hero;
