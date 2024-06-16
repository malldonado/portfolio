import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImDribbble } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

type Props = {};

function footer({}: Props) {
  return (
    <div className="relative w-full flex justify-center items-end mb-5 z-50 max-w-7xl mx-auto h-28 bg-black">
      <span className="text-white text-xl opacity-45">create by malldonado</span>
      {/* <div className="relative text-white text-[25px] flex">
        <a
          href="https://www.linkedin.com/in/matheusmaldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 cursor-pointer"
        >
          <SiLinkedin />
        </a>
        <a
          href="https://www.instagram.com/malldonado.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 cursor-pointer"
        >
          <GrInstagram />
        </a>
        <a
          href="https://github.com/malldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="mr-5 cursor-pointer"
        >
          <BsGithub />
        </a>
        <a
          href="https://dribbble.com/malldonado"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <ImDribbble />
        </a>
      </div> */}
    </div>
  );
}

export default footer;
