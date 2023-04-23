import {
  FaBrandsReact,
  FaBrandsHtml5,
  FaBrandsCss3,
  FaBrandsSass,
} from "solid-icons/fa";
import {
  SiVite,
  SiJavascript,
  SiNetlify,
  SiFirebase,
  SiSolid,
} from "solid-icons/si";

const ProjectCard = (props) => {
  return (
    <div class="text-5xl w-full">
      <p>{props.title}</p>
      <img src={props.src} alt={props.alt} />
      <p>{props.description}</p>
      <div class="flex">
        <FaBrandsReact />
        <SiVite />
        <FaBrandsSass />
        <FaBrandsCss3 />
        <FaBrandsHtml5 />
        <SiJavascript />
        <SiNetlify />
        <SiFirebase />
        <SiSolid />
      </div>
    </div>
  );
};

export default ProjectCard;
