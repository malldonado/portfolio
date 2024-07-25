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
      image: "/projects/5.png",
      text_en:
        "Admmiz is an inventory management system that encompasses the management of suppliers, clients, units, categories, products, purchases, invoices, and stock. Developed with ReactJS and Next.js, the frontend is styled with TailwindCSS and uses TypeScript to ensure greater security and scalability. The backend, implemented with TypeScript and NestJS, uses a MySQL database to efficiently manage user data.",
      text_pt:
        "Admmiz é um sistema de gerenciamento de estoque que abrange a gestão de fornecedores, clientes, unidades, categorias, produtos, compras, faturas e estoque. Desenvolvido com ReactJS e Next.js, o frontend é estilizado com TailwindCSS e utiliza TypeScript para garantir maior segurança e escalabilidade. No backend, implementado com TypeScript e NestJS, utiliza um banco de dados MySQL para gerenciar eficientemente os dados dos usuários.",
    },
    {
      id: 2,
      image: "/projects/1.png",
      text_en:
        "The GTM Engenharia project is a web application developed for the civil engineering company GTM Engenharia. It uses ReactJS with Vite and TailwindCSS on the frontend, and Node.js with MongoDB on the backend, making the site highly customizable. The application includes an admin panel that allows administrators to modify information, manage completed projects, and handle budget and contact requests. Additionally, an integrated blog showcases all the company's projects, facilitating direct communication with clients.",
      text_pt:
        "O projeto GTM Engenharia é uma aplicação web desenvolvida para a empresa de engenharia civil GTM Engenharia. Utilizando ReactJS com Vite e TailwindCSS no frontend e Node.js com MongoDB no backend, o site é altamente personalizável. Ele inclui um painel administrativo que permite aos administradores modificar informações, gerenciar projetos concluídos e lidar com solicitações de orçamento e contato. Além disso, um blog integrado destaca todos os projetos da empresa, facilitando a comunicação direta com os clientes.",
    },
    {
      id: 3,
      image: "/projects/2.png",
      text_en:
        "The Art Burger application is a dynamic website for a gourmet burger restaurant, developed with ReactJS and Vite, styled with TailwindCSS. It allows users to explore promotions, access an extensive menu, and make credit card payments via MercadoPago. The user panel offers transaction details, ordering options, and purchase history. The back-end uses ExpressJS, TypeScript, TypeORM, PostgreSQL, and Redis to ensure efficient data management and a smooth experience.",
      text_pt:
        "A aplicação Art Burger é um site dinâmico para uma hamburgueria gourmet, desenvolvido com ReactJS e Vite, estilizado com TailwindCSS. Ele permite aos usuários explorar promoções, acessar um extenso menu e realizar pagamentos com cartão de crédito via MercadoPago. O painel do usuário oferece detalhes de transações, opções de pedidos e histórico de compras. O back-end usa ExpressJS, TypeScript, TypeORM, PostgreSQL e Redis para garantir um gerenciamento eficiente de dados e uma experiência fluida.",
    },
    // {
    //   id: 4,
    //   image: "/projects/4.png",
    //   text_en:
    //     "Fluxplaces Marketplace is an innovative application that connects users to physical stores via Google Maps, allowing them to locate desired products within a specified radius, along with promotions and coupons. Developed with ReactJS and Next.js and styled with TailwindCSS, the frontend utilizes TypeScript for enhanced security and scalability. On the backend, implemented with TypeScript and NestJS, the application leverages the Google Maps API and a MySQL database to efficiently manage user data, store information, and transactions.",
    //   text_pt:
    //     "Fluxplaces Marketplace é uma aplicação inovadora que conecta usuários a lojas físicas via Google Maps, permitindo localizar produtos desejados dentro de um raio especificado, com promoções e cupons. Desenvolvida com ReactJS e Next.js e estilizada com TailwindCSS, o frontend utiliza TypeScript para maior segurança e escalabilidade. No backend, implementado com TypeScript e NestJS, a aplicação utiliza a API do Google Maps e um banco de dados MySQL para gerenciar eficientemente os dados dos usuários, informações das lojas e transações.",
    // }
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
