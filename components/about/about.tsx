"use client";

import React from "react";
import { useInView } from "react-intersection-observer";

type Props = {};

function About({}: Props) {
  // Hook to detect when the component is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation only once
    threshold: 0.5, // Trigger animation when 50% of the component is in viewport
  });

  return (
    <div ref={ref} className="text-white pt-28 pb-8 about-container">
      {/* Apply slide-in animation class conditionally based on inView */}
      <div className={`max-w-7xl mx-auto px-4 md:px-0 ${inView ? "slide-in visible" : "slide-in"}`}>
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10">About Me</h1>
          <p className="text-lg sm:text-2xl">
            Graduated in Analysis and Systems Development from FATEC, currently
            studying English at Influx, I worked as a front-end developer on the
            animal adoption TCC project and at Performa.ai on e-commerce
            integrations, learning Next.js, GraphQL, AWS, and Docker, with
            projects available on GitHub and a portfolio including projects like
            an application for the hamburger restaurant Art Burger, a project
            for a civil engineering company with a customizable panel, blog,
            etc., a tech-focused TI forum, and a physical store marketplace
            called Fluxplaces.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;