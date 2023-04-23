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
  const icons = {
    react: <FaBrandsReact color="#43c3ec" />,
    vite: <SiVite />,
    sass: <FaBrandsSass />,
    css: <FaBrandsCss3 />,
    html: <FaBrandsHtml5 />,
    javascript: <SiJavascript />,
    netlify: <SiNetlify />,
    firebase: <SiFirebase />,
    solid: <SiSolid />,
  };

  const renderIcons = () => {
    return props.icons.map((icon) => icons[icon] || null);
  };

  return (
    <div class="w-full border rounded p-8 border-emerald-900">
      <img src={props.src} alt={props.alt} />
      <p class="text-3xl mt-2">{props.title}</p>
      <p class="text-l">{props.description}</p>
      <div class="flex justify-between text-4xl mt-2">{renderIcons}</div>
    </div>
  );
};

export default ProjectCard;
