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
        "Admmiz is an inventory management system that includes the management of suppliers, customers, units, categories, products, purchases, invoices, and stock. Developed with ReactJS using Vite and styled with TailwindCSS, its backend is built in TypeScript using the Nest framework and TypeORM, with PostgreSQL as the database.",
      text_pt:
        "Admmiz é um sistema de gerenciamento de estoque que inclui gestão de fornecedores, clientes, unidades, categorias, produtos, compras, faturas e estoque. Desenvolvido com ReactJS usando Vite e estilizado com TailwindCSS, seu backend é construído em TypeScript utilizando o framework Nest e TypeORM, com PostgreSQL como banco de dados.",
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
        "The Art Burger application is a dynamic website developed for a gourmet burger joint. Built using ReactJS with Vite and styled with TailwindCSS, it allows users to explore gourmet burger promotions and an extensive menu. Customers can purchase burgers and make integrated credit card payments via MercadoPago, with transaction details accessible through a user dashboard. This dashboard provides comprehensive user information, order placement options, and order history. With support from Node.js and MongoDB, the application ensures efficient data management and a seamless experience for burger enthusiasts.",
      text_pt:
        "A aplicação Art Burger é um site dinâmico desenvolvido para uma hamburgueria gourmet. Utilizando ReactJS com Vite e estilizado com TailwindCSS, ele permite aos usuários explorar promoções de hambúrgueres gourmet e um extenso menu. Os clientes podem comprar hambúrgueres e realizar pagamentos integrados com cartão de crédito via MercadoPago, com detalhes da transação acessíveis através de um painel do usuário. Esse painel oferece informações completas do usuário, opções para fazer pedidos e histórico de compras anteriores. Com suporte de Node.js e MongoDB, a aplicação assegura o gerenciamento eficiente de dados e uma experiência fluida para os entusiastas de hambúrgueres.",
    },
    {
      id: 4,
      image: "/projects/4.png",
      text_en:
        "Fluxplaces marketplace is an innovative application that connects users with physical stores via Google Maps, enabling them to locate desired products within a specified radius, complete with promotions and coupons. Developed using ReactJS with Next.js and styled with TailwindCSS, the frontend incorporates TypeScript for enhanced security and scalability. In the backend, ASP.NET, using the Google Maps API combined with SQL, provides a robust foundation for the application, efficiently managing user data, store information, and transactions.",
      text_pt:
        "Fluxplaces marketplace é uma aplicação inovadora que conecta usuários a lojas físicas via Google Maps, permitindo localizar produtos desejados dentro de um raio especificado, com promoções e cupons. Desenvolvida usando ReactJS com Next.js e estilizada com TailwindCSS, o frontend incorpora TypeScript para maior segurança e escalabilidade. No backend, ASP.NET, utilizando a API do Google Maps combinada com SQL, fornece uma base robusta para a aplicação, gerenciando eficientemente dados de usuários, informações de lojas e transações.",
    }
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
