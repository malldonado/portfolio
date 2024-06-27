"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  language: string;
};

function About({ language }: Props) {
  // Hook para detectar quando o componente está visível
  const { ref, inView } = useInView({
    triggerOnce: true, // Dispara a animação apenas uma vez
    threshold: 0.5, // Dispara a animação quando 50% do componente está visível
  });

  return (
    <div ref={ref} className="text-white pt-28 pb-8 about-container">
      {/* Aplica classe de animação slide-in condicionalmente com base em inView */}
      <div className={`max-w-7xl mx-auto px-4 md:px-0 ${inView ? "slide-in visible" : "slide-in"}`}>
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10">{language === "en" ? "About Me" : "Sobre Mim"}</h1>
          <p className="text-lg sm:text-2xl">
            {language === "en" ? (
              <>
                Graduated in Systems Analysis and Development from FATEC and currently studying English at Influx, I worked as a front-end developer on the animal adoption TCC project and at Performa.ai, focusing on e-commerce integrations. I have learned Next.js, GraphQL, AWS, and Docker, with projects available on GitHub. My portfolio includes an app for Art Burger, a project for a civil engineering company with a customizable panel and blog, among others, as well as a tech-focused IT forum and a physical store called Fluxplaces.
              </>
            ) : (
              <>
                Formado em Análise e Desenvolvimento de Sistemas pela FATEC e atualmente cursando Inglês na Influx, atuei como desenvolvedor front-end no projeto TCC de adoção de animais e na Performa.ai, realizando integrações de e-commerce. Aprendi Next.js, GraphQL, AWS e Docker, e tenho projetos disponíveis no GitHub. Meu portfólio inclui um aplicativo para a hamburgueria Art Burger, um projeto para uma empresa de engenharia civil com painel customizável, blog, entre outros, além de um fórum de TI focado em tecnologia e uma loja física chamada Fluxplaces.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
