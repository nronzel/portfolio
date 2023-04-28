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
  SiTailwindcss,
  SiChakraui,
} from "solid-icons/si";
import { OcLinkexternal2 } from "solid-icons/oc";

const ProjectCard = (props) => {
  const icons = {
    react: (
      <a href="https://react.dev/" target="_blank">
        <FaBrandsReact color="#43c3ec" className="icon" title="react" />
      </a>
    ),
    vite: (
      <a href="https://vitejs.dev/" target="_blank">
        <SiVite color="turquoise" className="icon" title="vite" />
      </a>
    ),
    sass: (
      <a href="https://sass-lang.com/" target="_blank">
        <FaBrandsSass color="#cf649a" className="icon" title="sass" />
      </a>
    ),
    css: (
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/CSS"
        target="_blank"
      >
        <FaBrandsCss3 color="#2262af" className="icon" title="css" />
      </a>
    ),
    html: (
      <a href="https://en.wikipedia.org/wiki/HTML5" target="_blank">
        <FaBrandsHtml5 color="#e34f26" className="icon" title="html" />
      </a>
    ),
    javascript: (
      <a
        href="https://developer.mozilla.org/en-US/docs/Web/javascript"
        target="_blank"
      >
        <SiJavascript color="#f7df1e" className="icon" title="javascript" />
      </a>
    ),
    netlify: (
      <a href="https://www.netlify.com/" target="_blank">
        <SiNetlify color="#38b0be" className="icon" title="netlify" />
      </a>
    ),
    firebase: (
      <a href="https://firebase.google.com/" target="_blank">
        <SiFirebase color="#f5810a" className="icon" title="firebase" />
      </a>
    ),
    solid: (
      <a href="https://www.solidjs.com/" target="_blank">
        <SiSolid color="#4d87c6" className="icon" title="solid" />
      </a>
    ),
    webpack: (
      <a href="https://webpack.js.org/" target="_blank">
        <SiWebpack color="#8ed6fb" className="icon" title="webpack" />
      </a>
    ),
    reactrouter: (
      <a href="https://reactrouter.com/en/main" target="_blank">
        <SiReactrouter color="#f44b58" className="icon" title="reactrouter" />
      </a>
    ),
    jest: (
      <a href="https://jestjs.io/" target="_blank">
        <SiJest color="#119b0f" className="icon" title="jest" />
      </a>
    ),
    tailwind: (
      <a href="https://tailwindcss.com/" target="_blank">
        <SiTailwindcss color="#0677a9" className="icon" title="tailwind" />
      </a>
    ),
    chakraui: (
      <a href="https://chakra-ui.com/" target="_blank">
        <SiChakraui color="#4bc8c3" className="icon" title="chakraui" />
      </a>
    ),
  };

  const renderIcons = () => {
    return props.icons.map((icon) => icons[icon] || null);
  };

  return (
    <div
      className="
      max-w-xs
      w-full
      border
      rounded-lg
      border-emerald-900
      flex
      flex-col
      card
      "
      onMouseEnter={() => props.setHoveredIcons(props.icons)}
      onMouseLeave={() => props.setHoveredIcons([])}
    >
      {props.includeImage ? (
        <div className="overflow-hidden">
          <a href={props.link} target="_blank">
            <img
              className="project-image rounded-t-lg h-40 w-full object-cover object-top"
              src={props.src}
              alt={props.alt}
            />
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-col justify-between flex-grow pt-3 pl-8 pr-8 pb-8 relative">
        <p className="text-3xl mt-3 font-semibold text-emerald-400">
          {props.title}
        </p>
        <p className="text-l mt-2 text-emerald-200">{props.description}</p>
        <div className="flex flex-wrap gap-3 justify-between text-xl mt-10 mb-10">
          {renderIcons}
        </div>
        {props.bottomButtons ? (
          <div className="flex items-end gap-8">
            <a href={props.link} target="_blank">
              <OcLinkexternal2
                font-size="25px"
                color="rgb(209, 250, 229)"
                className="links"
              />
            </a>
            <a href={props.sourcecode} target="_blank">
              <SiGithub
                font-size="25px"
                color="rgb(209, 250, 229)"
                className="links github"
              />
            </a>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
