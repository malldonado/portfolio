"use client";
import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const Projects: React.FC = () => {
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const projects = [
    {
      id: 1,
      image: "/projects/1.png",
      text:
        "The GTM Engenharia project is a web application developed in ReactJS with Vite and TailwindCSS, designed for the civil engineering company GTM Engenharia. This customizable website includes an administrative panel that allows administrators to modify information, manage completed projects, and handle inquiries for quotes and contact. With an integrated blog highlighting all company projects, the application promotes a strong and interactive online presence, facilitating direct communication with clients and bolstering GTM Engenharia's reputation as a leader in the industry.",
    },
    {
      id: 2,
      image: "/projects/2.png",
      text:
        "The Art Burger application is a dynamic website tailored for a gourmet hamburger joint. Developed in ReactJS with Vite and styled using TailwindCSS, it offers users the ability to explore gourmet burger promotions and an extensive menu. Customers can seamlessly purchase burgers and make payments via credit card, with transaction details accessible through a user panel. This panel provides comprehensive user information, order placement options, and a history of past orders. Backed by Node.js and MongoDB, the application ensures efficient data management and a smooth user experience, enhancing convenience and satisfaction for burger enthusiasts.",
    },
    {
      id: 3,
      image: "/projects/3.png",
      text:
        "Desenvolve website is a forum dedicated to the IT community, designed for comprehensive discussions on programming languages, hardware, and related fields. Built using Vue with ViteJS for the frontend, the layout is crafted using HTML and CSS with Bootstrap to ensure a modern and responsive interface. On the backend, it is implemented in PHP with MySQL as the database, providing a robust framework for storing and managing user information and forum content. Desenvolve offers an ideal platform for sharing knowledge, resolving queries, and fostering interaction among technology professionals and enthusiasts.",
    },
    {
      id: 4,
      image: "/projects/4.png",
      text:
        "Fluxplaces marketplace is an innovative application that connects users with physical stores via Google Maps, enabling them to locate desired products within a specified radius, complete with promotions and coupons. Developed using ReactJS with Next.js and styled with TailwindCSS, the frontend incorporates TypeScript for enhanced security and scalability. In the backend, TypeScript combined with MongoDB provides a robust foundation for the application, efficiently managing user data, store information, and transactions. Fluxplaces not only facilitates proximity-based product searches but also fosters interaction between consumers and local retailers, promoting a more dynamic and accessible commerce experience.",
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
        <h2 className="text-4xl sm:text-5xl lg:text-7xl leading-tight mb-16">
          Projects
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-y-20 gap-x-8 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <Project key={project.id} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

interface ProjectProps {
  project: {
    id: number;
    image: string;
    text: string;
  };
  index: number;
}

const Project: React.FC<ProjectProps> = ({ project, index }) => {
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
        className={`relative h-80 md:h-96 rounded-2xl overflow-hidden group cursor-pointer transition-opacity duration-1000 ease-in-out opacity-0 ${
          textInView ? "opacity-100" : ""
        }`}
      >
        <span className="text-lg sm:text-xl text-white flex items-center h-full">
          {project.text}
        </span>
      </div>
    </>
  );
};

export default Projects;
