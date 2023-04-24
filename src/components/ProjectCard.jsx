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
  SiWebpack,
  SiReactrouter,
  SiJest,
  SiGithub,
} from "solid-icons/si";
import { OcLinkexternal2 } from "solid-icons/oc";

import "./styles/styles.css";

const ProjectCard = (props) => {
  const icons = {
    react: (
      <a href="https://react.dev/" target="_blank">
        <FaBrandsReact color="#43c3ec" class="icon" />
      </a>
    ),
    vite: (
      <a href="https://vitejs.dev/" target="_blank">
        <SiVite color="turquoise" class="icon" />
      </a>
    ),
    sass: (
      <a href="https://sass-lang.com/" target="_blank">
        <FaBrandsSass color="#cf649a" class="icon" />
      </a>
    ),
    css: (
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <FaBrandsCss3 color="#2262af" class="icon" />
      </a>
    ),
    html: (
      <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
        <FaBrandsHtml5 color="#e34f26" class="icon" />
      </a>
    ),
    javascript: (
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        target="_blank"
      >
        <SiJavascript color="#f7df1e" class="icon" />
      </a>
    ),
    netlify: (
      <a href="https://www.netlify.com/" target="_blank">
        <SiNetlify color="#38b0be" class="icon" />
      </a>
    ),
    firebase: (
      <a href="https://firebase.google.com/" target="_blank">
        <SiFirebase color="#f5810a" class="icon" />
      </a>
    ),
    solid: (
      <a href="https://www.solidjs.com/" target="_blank">
        <SiSolid color="#4d87c6" class="icon" />
      </a>
    ),
    webpack: (
      <a href="https://webpack.js.org/" target="_blank">
        <SiWebpack color="#8ed6fb" class="icon" />
      </a>
    ),
    reactrouter: (
      <a href="https://reactrouter.com/en/main" target="_blank">
        <SiReactrouter color="#f44b58" class="icon" />
      </a>
    ),
    jest: (
      <a href="https://jestjs.io/" target="_blank">
        <SiJest color="#119b0f" class="icon" />
      </a>
    ),
  };

  const renderIcons = () => {
    return props.icons.map((icon) => icons[icon] || null);
  };

  return (
    <div class="max-w-xs w-full border rounded p-8 border-emerald-900">
      <img src={props.src} alt={props.alt} />
      <p class="text-3xl mt-4">{props.title}</p>
      <p class="text-l mt-2">{props.description}</p>
      <div class="flex flex-wrap justify-between text-4xl mt-10 mb-10">
        {renderIcons}
      </div>
      <div class="flex items-center gap-8">
        <OcLinkexternal2
          font-size="25px"
          color="rgb(209, 250, 229)"
          className="links"
        />
        <SiGithub
          font-size="25px"
          color="rgb(209, 250, 229)"
          className="links github"
        />
      </div>
    </div>
  );
};

export default ProjectCard;
