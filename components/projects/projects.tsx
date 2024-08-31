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
        "Admmiz is an inventory management system that encompasses the management of suppliers, clients, units, categories, products, purchases, invoices, and stock. The frontend is developed with ReactJS, Next.js, and TailwindCSS, utilizing TypeScript to ensure security and scalability. On the backend, the system is implemented with Node.js, NestJS, and Fastify, following practices such as DDD and Clean Architecture. The system uses Prisma as the ORM and PostgreSQL as the database, managed by Docker Compose, and is hosted on AWS for efficient data administration.",
      text_pt:
        "Admmiz é um sistema de gerenciamento de estoque que abrange a gestão de fornecedores, clientes, unidades, categorias, produtos, compras, faturas e estoque. O frontend é desenvolvido com ReactJS, Next.js e TailwindCSS, utilizando TypeScript para garantir segurança e escalabilidade. No backend, o sistema é implementado com Node.js, NestJS e Fastify, seguindo práticas como DDD e Clean Architecture. O sistema utiliza Prisma como ORM e PostgreSQL como banco de dados, gerenciados por Docker Compose, e é hospedado na AWS para uma administração eficiente dos dados.",
    },
    {
      id: 2,
      image: "/projects/2.png",
      project_name: "Art Burger",
      text_en:
        "Art Burger is an interactive website for a gourmet burger restaurant, developed with ReactJS and Vite, and styled with TailwindCSS. Users can explore promotions, access an extensive menu, and make credit card payments through MercadoPago. The user panel provides transaction details, ordering options, and purchase history. The back end is powered by TypeScript with Node.js and Knex, using MySQL as the database, managed by Docker, and hosted on AWS.",
      text_pt:
        "A aplicação Art Burger é um site interativo para um restaurante de hambúrgueres gourmet, desenvolvido com ReactJS e Vite e estilizado com TailwindCSS. Os usuários podem explorar promoções, acessar um menu extenso e realizar pagamentos com cartão de crédito via MercadoPago. O painel do usuário oferece detalhes de transações, opções de pedidos e histórico de compras. O back-end é desenvolvido em TypeScript com Node.js e Knex, utilizando MySQL como banco de dados, gerenciado por Docker e hospedado na AWS.",
    },
    {
      id: 3,
      image: "/projects/3.png",
      project_name: "Desenvolve",
      text_en:
        "A custom forum for developers, featuring a frontend built with Vue.js that offers a modern and responsive interface, styled with CSS. The backend is developed in TypeScript with Node.js, using TypeORM for efficient database management. Redis is utilized for temporary storage, while PostgreSQL provides robust and reliable storage. Data validation is handled with Celebrate, and the application is containerized with Docker for easier management and scalability, and hosted on AWS.",
      text_pt:
        "Um fórum personalizado para desenvolvedores, com um frontend em Vue.js que oferece uma interface moderna e responsiva, estilizada com CSS. O back-end é desenvolvido em TypeScript com Node.js, utilizando TypeORM para gerenciamento eficiente do banco de dados. Redis é empregado para armazenamento temporário, enquanto PostgreSQL é usado para armazenamento robusto e confiável. A validação de dados é realizada com Celebrate, e a aplicação é containerizada com Docker para facilitar o gerenciamento, a escalabilidade, e hospedada na AWS.",
    },
    {
      id: 4,
      image: "/projects/4.png",
      project_name: "GTM Engenharia",
      text_en:
        "The GTM Engenharia project is a web application developed for the civil engineering company GTM Engenharia. The frontend is built with ReactJS using Vite and TailwindCSS, while the backend is powered by Node.js with MongoDB. The site is highly customizable and includes an admin panel that allows administrators to edit information, manage completed projects, and handle budget and contact requests. Additionally, an integrated blog highlights the company’s projects, facilitating direct communication with clients. The application is managed with Docker and hosted on AWS.",
      text_pt:
        "O projeto GTM Engenharia é uma aplicação web criada para a empresa de engenharia civil GTM Engenharia. O frontend é desenvolvido com ReactJS utilizando Vite e TailwindCSS, enquanto o backend utiliza Node.js com MongoDB. O site é altamente personalizável e inclui um painel administrativo que permite aos administradores editar informações, gerenciar projetos concluídos e lidar com solicitações de orçamento e contato. Além disso, um blog integrado destaca os projetos da empresa, facilitando a comunicação direta com os clientes. A aplicação é gerenciada com Docker e hospedada na AWS.",
    },
    {
      id: 5,
      image: "/projects/5.png",
      project_name: "Promoplace",
      text_en:
        "Promoplace is an application that helps users locate nearby stores using the Google Maps API, allowing them to search for products within a specific radius, as well as promotions and discounts. The frontend is developed with ReactJS and Next.js, styled with TailwindCSS, and utilizes TypeScript to ensure security and scalability. On the backend, the application is built with Python and Django, using MySQL, along with Docker and AWS, to manage user data and store information.",
      text_pt:
        "Promoplace é uma aplicação que ajuda os usuários a encontrar lojas próximas usando a API do Google Maps, permitindo a busca de produtos dentro de um raio específico, além de promoções e descontos. O frontend é desenvolvido com ReactJS e Next.js, estilizado com TailwindCSS, e utiliza TypeScript para garantir segurança e escalabilidade. No backend, a aplicação é construída com Python e Django, utilizando MySQL, com Docker e AWS, para gerenciar os dados dos usuários e as informações das lojas.",
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
          {language !== "en" ? project.text_en : project.text_pt}
        </span>
      </div>
    </>
  );
};

export default Projects;
