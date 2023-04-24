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
} from "solid-icons/si";
import "./styles/styles.css";

const IconArray = (props) => {
  const iconComponents = [
    { component: FaBrandsReact, title: "react" },
    { component: FaBrandsHtml5, title: "html" },
    { component: FaBrandsCss3, title: "css" },
    { component: FaBrandsSass, title: "sass" },
    { component: SiVite, title: "vite" },
    { component: SiJavascript, title: "javascript" },
    { component: SiNetlify, title: "netlify" },
    { component: SiFirebase, title: "firebase" },
    { component: SiSolid, title: "solid" },
    { component: SiWebpack, title: "webpack" },
    { component: SiReactrouter, title: "reactrouter" },
    { component: SiJest, title: "jest" },
  ];
  return (
    <div class="flex w-full gap-8 justify-center shrink-0 flex-wrap text-4xl mt-5">
      {iconComponents.map((icon) => {
        const IconComponent = icon.component;
        const isActive = props.hoveredIcons().includes(icon.title);
        return (
          <IconComponent
            class={`iconarray ${isActive ? "active" : ""}`}
            title={icon.title}
          />
        );
      })}
    </div>
  );
};

export default IconArray;
