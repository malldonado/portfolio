"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  language: string;
};

function About({ language }: Props) {
  // Hook para detectar quando o componente está visível
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref} className="text-white md:pt-44 pt-20 pb-8 about-container">
      {/* Aplica classe de animação slide-in condicionalmente com base em inView */}
      <div
        className={`max-w-7xl mx-auto px-4 md:px-0 ${
          inView ? "slide-in visible" : "slide-in"
        }`}
      >
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10">
            {language !== "en" ? "About Me" : "Sobre Mim"}
          </h1>
          <p className="text-lg sm:text-2xl">
            {language !== "en" ? (
              <>
                I hold a degree in Systems Analysis and Development from FATEC and am currently enhancing my English skills at Influx. My experience includes working as a front-end developer on a graduation project focused on animal adoption and as a Full Stack Developer at Performa.ai, where I integrated virtual stores across various e-commerce platforms. I am constantly learning new technologies and actively contribute to projects on my GitHub.
                <br />
                <br />
                My portfolio features several projects, including Admmiz, a comprehensive inventory management system that covers suppliers, clients, units, categories, products, purchases, and invoices. I also developed ArtBurger, an interactive website for a gourmet burger restaurant, and the GTM Engenharia website, which offers functionalities for budget requests and a corporate blog. Another highlight is Desenvolve, a forum created to allow developers to share questions and knowledge. Additionally, Promoplace is a platform for locating nearby stores, providing information on products, promotions, and discounts.
              </>
            ) : (
              <>
                Sou graduado em Análise e Desenvolvimento de Sistemas pela FATEC e estou aprimorando meu inglês na Influx. Minha experiência inclui atuação como desenvolvedor front-end em um projeto de TCC voltado para a adoção de animais e como Desenvolvedor Full Stack na Performa.ai, onde integrei lojas virtuais de várias plataformas de e-commerce. Estou constantemente aprendendo novas tecnologias e contribuo ativamente para projetos no meu GitHub.
                <br />
                <br />
                Meu portfólio inclui diversos projetos, como o Admmiz, um sistema robusto de gerenciamento de estoque que abrange fornecedores, clientes, unidades, categorias, produtos, compras e faturas. Também desenvolvi o ArtBurger, um site interativo para uma lanchonete gourmet, e o site da GTM Engenharia, que oferece funcionalidades para solicitação de orçamentos e um blog corporativo. Outro projeto de destaque é o fórum Desenvolve, criado para permitir que desenvolvedores compartilhem dúvidas e conhecimentos. Além disso, o Promoplace é uma plataforma para localizar lojas próximas ao usuário, com informações sobre produtos, promoções e descontos.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
