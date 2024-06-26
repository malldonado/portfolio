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
                Graduated in Analysis and Systems Development from FATEC, currently
                studying English at Influx, I worked as a front-end developer on the
                animal adoption TCC project and at Performa.ai on e-commerce
                integrations, learning Next.js, GraphQL, AWS, and Docker, with
                projects available on GitHub and a portfolio including projects like
                an application for the hamburger restaurant Art Burger, a project
                for a civil engineering company with a customizable panel, blog,
                etc., a tech-focused TI forum, and a physical store marketplace
                called Fluxplaces.
              </>
            ) : (
              <>
                Formado em Análise e Desenvolvimento de Sistemas pela FATEC, atualmente
                estudando inglês na Influx, trabalhei como desenvolvedor front-end no
                projeto de TCC de adoção de animais e na Performa.ai em integrações de
                e-commerce, aprendendo Next.js, GraphQL, AWS e Docker, com projetos
                disponíveis no GitHub e um portfólio que inclui projetos como um
                aplicativo para o restaurante de hambúrguer Art Burger, um projeto para
                uma empresa de engenharia civil com painel personalizável, blog, etc., um
                fórum de TI focado em tecnologia e um marketplace de lojas físicas chamado
                Fluxplaces.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
