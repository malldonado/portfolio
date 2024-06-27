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
                Graduated in Systems Analysis and Development from FATEC and currently studying English at Influx, I worked as a front-end developer on the TCC animal adoption project. At Performa.ai, I worked on integrating virtual stores from various e-commerce platforms. I am always in constant study, learning Next.js, GraphQL, AWS, and Docker, in addition to contributing to projects available on my GitHub. My portfolio includes an app for the Art Burger hamburger restaurant, a project for the civil engineering company GTM Engenharia with a customizable panel, a blog, among others, and an application that locates stores and products near the user, called Fluxplaces.
              </>
            ) : (
              <>
                Formado em Análise e Desenvolvimento de Sistemas pela FATEC e atualmente cursando Inglês na Influx, atuei como desenvolvedor front-end no projeto TCC de adoção de animais. No Performa.ai, trabalhei realizando integrações de lojas virtuais de várias plataformas de ecommerce. Estou sempre em constante estudo, aprendendo Next.js, GraphQL, AWS e Docker, além de contribuir para projetos disponíveis no meu GitHub. Meu portfólio inclui um aplicativo para a hamburgueria Art Burger, um projeto para a empresa de engenharia civil GTM Engenharia com painel customizável, blog, entre outros, e uma aplicação que localiza lojas e produtos próximos ao usuário, chamada Fluxplaces.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
