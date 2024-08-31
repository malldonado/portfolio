import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import { ImDribbble } from "react-icons/im";
import { BsGithub } from "react-icons/bs";

type Props = {};

function footer({}: Props) {
  return (
    <div className="relative w-full flex justify-center items-end mb-5 z-50 max-w-7xl mx-auto h-28 bg-black">
      <span className="text-white text-xl opacity-45">create by malldonado</span>
    </div>
  );
}

export default footer;
