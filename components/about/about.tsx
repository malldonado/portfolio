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
                I graduated in Systems Analysis and Development from FATEC and am currently improving my English at Influx. My journey includes experience as a front-end developer on a thesis project focused on pet adoption, and as a Full Stack Developer at Performa.ai, where I integrated virtual stores from various ecommerce platforms. I am continually studying new technologies such as Next.js, GraphQL, AWS, and Docker, and actively contribute to projects on my GitHub.
                <br />
                <br />
                My portfolio is diverse, featuring the Art Burger application, which includes an admin panel for customizing the burger menu and managing purchase orders. I also developed a website for GTM Engenharia, with features for requesting quotes and a corporate blog. Additionally, I created Admmiz, a robust inventory management system that provides detailed control over suppliers, clients, categories, products, purchases, invoices, and stock. Another significant project is Admmiz, an inventory manager that simplifies the administration of suppliers, clients, units, categories, products, purchases, and invoices.
              </>
            ) : (
              <>
                Sou formado em Análise e Desenvolvimento de Sistemas pela FATEC e atualmente estou aprimorando meu inglês na Influx. Minha trajetória inclui experiência como desenvolvedor front-end em um projeto de TCC focado na adoção de animais, e como Desenvolvedor Full Stack na Performa.ai, onde integrei lojas virtuais de diversas plataformas de ecommerce. Estou constantemente estudando novas tecnologias como Next.js, GraphQL, AWS e Docker, e contribuo ativamente para projetos no meu GitHub.
                <br />
                <br />
                Meu portfólio é diversificado, destacando-se a aplicação para a hamburgueria Art Burger, que possui um painel administrativo para personalização do menu de hambúrgueres e gestão de pedidos de compra. Também desenvolvi um site para a GTM Engenharia, com funcionalidades para solicitação de orçamentos e um blog corporativo. Além disso, criei o Admmiz, um robusto sistema de gerenciamento de estoque que oferece controle detalhado de fornecedores, clientes, categorias, produtos, compras, faturas e estoque. Outro projeto significativo é o Admmiz, é um gerenciador de estoque que facilita a administração de fornecedores, clientes, unidades, categorias, produtos, compras, faturas.
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
