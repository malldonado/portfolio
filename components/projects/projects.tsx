"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

type Project = {
  id: number;
  image: string;
  project_name: string;
  text_en: string;
  text_pt: string;
};

type Props = {
  language: string;
};

const Projects: React.FC<Props> = ({ language }) => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects: Project[] = [
    {
      id: 1,
      image: "/projects/1.png",
      project_name: "Admmiz",
      text_en:
        "Admmiz is an inventory management system that encompasses the management of suppliers, clients, units, categories, products, purchases, invoices, and stock. Developed with ReactJS and Next.js, the frontend is styled with TailwindCSS and uses TypeScript to ensure greater security and scalability. The backend, implemented with TypeScript and NestJS, uses a MySQL database to efficiently manage user data.",
      text_pt:
        "Admmiz é um sistema de gerenciamento de estoque que abrange a gestão de fornecedores, clientes, unidades, categorias, produtos, compras, faturas e estoque. Desenvolvido com ReactJS e Next.js, o frontend é estilizado com TailwindCSS e utiliza TypeScript para garantir maior segurança e escalabilidade. No backend, implementado com TypeScript e NestJS, utiliza um banco de dados MySQL para gerenciar eficientemente os dados dos usuários.",
    },
    {
      id: 2,
      image: "/projects/2.png",
      project_name: "Art Burger",
      text_en:
        "The Art Burger application is a dynamic website for a gourmet burger restaurant, developed with ReactJS and Vite, styled with TailwindCSS. It allows users to explore promotions, access an extensive menu, and make credit card payments via MercadoPago. The user panel offers transaction details, ordering options, and purchase history. The back-end is powered by TypeScript, and Knex with PostgreSQL.",
      text_pt:
        "A aplicação Art Burger é um site dinâmico para um restaurante de hambúrgueres gourmet, desenvolvido com ReactJS e Vite, estilizado com TailwindCSS. Ela permite aos usuários explorar promoções, acessar um menu extenso e realizar pagamentos com cartão de crédito via MercadoPago. O painel do usuário oferece detalhes de transações, opções de pedidos e histórico de compras. O back-end é alimentado por TypeScript e Knex com PostgreSQL.",
    },
    {
      id: 3,
      image: "/projects/3.png",
      project_name: "Desenvolve",
      text_en:
        "A forum tailored for developers, crafted with Vue.js and Nuxt.js for the frontend, styled with CSS for a responsive and modern design. The backend is developed in TypeScript, utilizing TypeORM for efficient database management, with Redis serving as a temporary database and PostgreSQL providing robust and reliable data storage.",
      text_pt:
        "Um fórum personalizado para desenvolvedores, criado com Vue.js e Nuxt.js para o frontend, estilizado com CSS para um design responsivo e moderno. O backend é desenvolvido em TypeScript, utilizando TypeORM para uma gestão eficiente de banco de dados, com Redis servindo como banco de dados temporário e PostgreSQL oferecendo armazenamento de dados robusto e confiável.",
    },
    {
      id: 4,
      image: "/projects/4.png",
      project_name: "GTM Engenharia",
      text_en:
        "The GTM Engenharia project is a web application developed for the civil engineering company GTM Engenharia. It uses ReactJS with Vite and TailwindCSS on the frontend, and Node.js with MongoDB on the backend, making the site highly customizable. The application includes an admin panel that allows administrators to modify information, manage completed projects, and handle budget and contact requests. Additionally, an integrated blog showcases all the company's projects, facilitating direct communication with clients.",
      text_pt:
        "O projeto GTM Engenharia é uma aplicação web desenvolvida para a empresa de engenharia civil GTM Engenharia. Utilizando ReactJS com Vite e TailwindCSS no frontend e Node.js com MongoDB no backend, o site é altamente personalizável. Ele inclui um painel administrativo que permite aos administradores modificar informações, gerenciar projetos concluídos e lidar com solicitações de orçamento e contato. Além disso, um blog integrado destaca todos os projetos da empresa, facilitando a comunicação direta com os clientes.",
    },
    {
      id: 5,
      image: "/projects/5.png",
      project_name: "Fluxplaces",
      text_en:
        "Fluxplaces Marketplace is an application that helps users locate nearby stores using the Google Maps API, allowing them to find products within a specified radius, along with promotions and discounts. The frontend is developed with ReactJS and Next.js, styled with TailwindCSS, and uses TypeScript for enhanced security and scalability. On the backend, built with Python and Django, the application integrates the MercadoPago gateway and uses MySQL on Cloudinary to manage user data, store information, and transactions.",
      text_pt:
        "Fluxplaces Marketplace é uma aplicação que ajuda os usuários a encontrar lojas próximas usando a API do Google Maps, permitindo-lhes localizar produtos dentro de um raio especificado, além de promoções e descontos. O frontend é desenvolvido com ReactJS e Next.js, estilizado com TailwindCSS, e utiliza TypeScript para maior segurança e escalabilidade. No backend, construído com Python e Django, a aplicação integra o gateway MercadoPago e utiliza MySQL no Cloudinary para gerenciar dados de usuários, informações das lojas e transações.",
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 md:gap-y-40 mx-auto max-w-7xl md:gap-x-8">
        {projects.map((project) => (
          <Project key={project.id} project={project} language={language} />
        ))}
      </div>
    </div>
  );
};

type ProjectProps = {
  project: Project;
  language: string;
};

const Project: React.FC<ProjectProps> = ({ project, language }) => {
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
      <div
        ref={imageRef}
        className={`relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-1000 ease-in-out opacity-0 ${
          imageInView ? "opacity-100" : ""
        }`}
      >
        <Image
          src={project.image}
          alt={project.project_name}
          layout="fill"
          objectFit="cover"
          className="group-hover:opacity-100"
        />
      </div>
      <div
        ref={textRef}
        className={`relative mt-8 mb-8 md:mb-0 md:mt-0 h-auto md:h-96 rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-1000 ease-in-out opacity-0 ${
          textInView ? "opacity-100" : ""
        }`}
      >
        <span className="text-white text-3xl">{project.project_name}</span>
        <span className="text-md sm:text-xl text-white flex items-start md:items-center mt-2 mb-10 md:mt-8 md:mb-0">
          {language === "en" ? project.text_en : project.text_pt}
        </span>
      </div>
    </>
  );
};

export default Projects;
