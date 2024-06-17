import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImDribbble } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

function Navbar() {
  return (
    <div className="relative w-full flex justify-between items-center z-50 max-w-7xl mx-auto h-24 bg-black px-4 md:px-0">
      <span className="text-white text-3xl cursor-pointer logo-text">malldonado</span>
      <div className="text-white text-[25px] flex space-x-5">
        <a
          href="https://www.linkedin.com/in/matheusmaldonadosilva"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer navbar-icon"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/matheusmalldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer navbar-icon"
        >
          <GrInstagram />
        </a>
        <a
          href="https://github.com/malldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer navbar-icon"
        >
          <BsGithub />
        </a>
        <a
          href="https://dribbble.com/malldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer navbar-icon"
        >
          <ImDribbble />
        </a>
      </div>
    </div>
  );
}

export default Navbar;
