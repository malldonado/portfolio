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
    <div ref={ref} className="text-white md:pt-44 pt-20 pb-8 about-container">
      {/* Aplica classe de animação slide-in condicionalmente com base em inView */}
      <div
        className={`max-w-7xl mx-auto px-4 md:px-0 ${
          inView ? "slide-in visible" : "slide-in"
        }`}
      >
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10">
            {language === "en" ? "About Me" : "Sobre Mim"}
          </h1>
          <p className="text-lg sm:text-2xl">
            {language === "en" ? (
              <>
                I graduated in Systems Analysis and Development from FATEC and am currently improving my English at Influx. My journey includes experience as a front-end developer on a thesis project focused on pet adoption, and as a Full Stack Developer at Performa.ai, where I integrated virtual stores from various ecommerce platforms. I am continually studying new technologies such as GraphQL, AWS, and Docker, and actively contribute to projects on my GitHub.
                <br />
                <br />
                My portfolio is diverse, featuring the Art Burger application, which includes an admin panel for customizing the burger menu and managing orders. I also developed the GTM Engenharia website, which offers quote request functionality and a corporate blog. Additionally, I created Admmiz, a robust inventory management system that covers suppliers, clients, units, categories, products, purchases, and invoices. Another highlight is the Desenvolve forum, designed for developers to ask questions and exchange knowledge.
              </>
            ) : (
              <>
                Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC e atualmente estou aprimorando meu inglês na Influx. Minha trajetória inclui experiência como desenvolvedor front-end em um projeto de TCC focado na adoção de animais, e como Desenvolvedor Full Stack na Performa.ai, onde integrei lojas virtuais de diversas plataformas de ecommerce. Estou constantemente estudando novas tecnologias como GraphQL, AWS e Docker, e contribuo ativamente para projetos no meu GitHub.
                <br />
                <br />
                Meu portfólio é diversificado, incluindo a aplicação Art Burger, que oferece um painel administrativo para personalização do menu de hambúrgueres e gestão de pedidos. Desenvolvi também o site da GTM Engenharia, com funcionalidades para solicitação de orçamentos e um blog corporativo. Além disso, criei o Admmiz, um robusto sistema de gerenciamento de estoque que abrange fornecedores, clientes, unidades, categorias, produtos, compras e faturas. Outro destaque é o fórum Desenvolve, projetado para que desenvolvedores possam tirar dúvidas e trocar conhecimentos.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
