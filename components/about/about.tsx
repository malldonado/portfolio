import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="text-white pt-28 pb-8">
      <div className="max-w-7xl mx-auto px-4 md:px-0">
        <div className="text-left">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl mb-10">
            About Us
          </h1>
          <p className="text-lg sm:text-2xl">
            We strive to bring innovation and creativity to every project we
            undertake. Our team of experts works closely with our clients to
            understand their needs and deliver outstanding solutions. We are
            dedicated to creating products that exceed our clients'
            expectations.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
