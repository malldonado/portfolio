"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Props = {
  language: string;
};

const Projects: React.FC<Props> = ({ language }) => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects = [
    {
      id: 1,
      image: "/projects/1.png",
      text_en:
        "The GTM Engenharia project is a web application developed in ReactJS with Vite and TailwindCSS, designed for the civil engineering company GTM Engenharia. This customizable website includes an administrative panel that allows administrators to modify information, manage completed projects, and handle inquiries for quotes and contact. With an integrated blog highlighting all company projects, the application promotes a strong and interactive online presence, facilitating direct communication with clients and bolstering GTM Engenharia's reputation as a leader in the industry.",
      text_pt:
        "O projeto GTM Engenharia é uma aplicação web desenvolvida em ReactJS com Vite e TailwindCSS, projetada para a empresa de engenharia civil GTM Engenharia. Este site personalizável inclui um painel administrativo que permite aos administradores modificar informações, gerenciar projetos concluídos e lidar com solicitações de orçamento e contato. Com um blog integrado destacando todos os projetos da empresa, a aplicação promove uma forte e interativa presença online, facilitando a comunicação direta com os clientes e reforçando a reputação da GTM Engenharia como líder no setor.",
    },
    {
      id: 2,
      image: "/projects/2.png",
      text_en:
        "The Art Burger application is a dynamic website tailored for a gourmet hamburger joint. Developed in ReactJS with Vite and styled using TailwindCSS, it offers users the ability to explore gourmet burger promotions and an extensive menu. Customers can seamlessly purchase burgers and make payments via credit card, with transaction details accessible through a user panel. This panel provides comprehensive user information, order placement options, and a history of past orders. Backed by Node.js and MongoDB, the application ensures efficient data management and a smooth user experience, enhancing convenience and satisfaction for burger enthusiasts.",
      text_pt:
        "A aplicação Art Burger é um site dinâmico desenvolvido para uma hamburgueria gourmet. Desenvolvido em ReactJS com Vite e estilizado com TailwindCSS, oferece aos usuários a possibilidade de explorar promoções de hambúrgueres gourmet e um extenso menu. Os clientes podem comprar hambúrgueres e efetuar pagamentos com cartão de crédito de forma integrada, com detalhes da transação acessíveis através de um painel do usuário. Este painel fornece informações abrangentes do usuário, opções de colocação de pedidos e histórico de pedidos anteriores. Com suporte de Node.js e MongoDB, a aplicação garante gerenciamento eficiente de dados e uma experiência suave para os entusiastas de hambúrgueres.",
    },
    {
      id: 3,
      image: "/projects/4.png",
      text_en:
        "Fluxplaces marketplace is an innovative application that connects users with physical stores via Google Maps, enabling them to locate desired products within a specified radius, complete with promotions and coupons. Developed using ReactJS with Next.js and styled with TailwindCSS, the frontend incorporates TypeScript for enhanced security and scalability. In the backend, TypeScript combined with MongoDB provides a robust foundation for the application, efficiently managing user data, store information, and transactions.",
      text_pt:
        "Fluxplaces marketplace é uma aplicação inovadora que conecta usuários a lojas físicas via Google Maps, permitindo-lhes localizar produtos desejados dentro de um raio especificado, com promoções e cupons. Desenvolvido utilizando ReactJS com Next.js e estilizado com TailwindCSS, o frontend incorpora TypeScript para segurança e escalabilidade aprimoradas. No backend, TypeScript combinado com MongoDB oferece uma base robusta para a aplicação, gerenciando eficientemente dados do usuário, informações da loja e transações.",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-0">
      <div
        ref={titleRef}
        className={`text-left text-white transition-opacity duration-1000 ease-in-out opacity-0 ${
          titleInView ? "opacity-100" : ""
        }`}
      >
        <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight md:mb-12 mb-8">
          {language === "en" ? "Projects" : "Projetos"}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-y-20 mx-auto max-w-7xl md:gap-x-8">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} language={language} index={index} />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  project: {
    id: number;
    image: string;
    text_en: string;
    text_pt: string;
  };
  language: string;
  index: number;
}

const Project: React.FC<ProjectProps> = ({ project, language, index }) => {
  const { ref: imageRef, inView: imageInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const { ref: textRef, inView: textInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <>
      {/* Container da imagem */}
      <div
        ref={imageRef}
        className={`relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-1000 ease-in-out opacity-0 ${
          imageInView ? "opacity-100" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={`Project ${project.id}`}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-100"
        />
      </div>
      {/* Container do texto */}
      <div
        ref={textRef}
        className={`relative h-auto md:h-96 rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-1000 ease-in-out opacity-0 ${
          textInView ? "opacity-100" : ""
        }`}
      >
        <span className="text-md sm:text-xl text-white flex items-start md:items-center h-full mt-6 mb-20 md:mt-0 md:mb-0">
          {language === "en" ? project.text_en : project.text_pt}
        </span>
      </div>
    </>
  );
};

export default Projects;
