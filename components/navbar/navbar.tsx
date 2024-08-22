"use client";
import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImDribbble } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { useState } from "react";

interface NavbarProps {
  setLanguage: (language: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setLanguage }) => {
  const [currentLanguage, setCurrentLanguage] = useState<string>("en");

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === "en" ? "pt" : "en";
    setCurrentLanguage(newLanguage);
    if (setLanguage) {
      setLanguage(newLanguage);
    }
  };

  return (
    <div className="relative w-full flex justify-between items-center z-50 max-w-7xl mx-auto h-24 bg-black px-4 md:px-0">
      <span className="text-white md:text-3xl text-2xl cursor-pointer logo-text">
        malldonado
      </span>
      <div className="text-white md:text-[25px] text-[20px] flex md:space-x-5 space-x-3">
        <NavItem
          href="https://www.linkedin.com/in/malldonado"
          icon={<SiLinkedin />}
        />
        <NavItem
          href="https://www.instagram.com/matheusmalldonado"
          icon={<GrInstagram />}
        />
        <NavItem
          href="https://dribbble.com/malldonado"
          icon={<ImDribbble />}
        />
        <NavItem
          href="https://github.com/malldonado"
          icon={<BsGithub />}
        />
        <a
          href="#"
          className="cursor-pointer flex items-end w-[50px]"
          onClick={toggleLanguage}
        >
          <p className="text-sm mr-2 text-center">{currentLanguage === "en" ? "PT" : "EN"}</p>
          <GrLanguage />
        </a>
      </div>
    </div>
  );
};

interface NavItemProps {
  href: string;
  icon: JSX.Element;
}

const NavItem: React.FC<NavItemProps> = ({ href, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="cursor-pointer navbar-icon"
  >
    {icon}
  </a>
);

export default Navbar;