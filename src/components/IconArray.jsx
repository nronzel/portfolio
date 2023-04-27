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
  SiTailwindcss,
  SiChakraui,
} from "solid-icons/si";
import { For } from "solid-js";

const IconArray = (props) => {
  const iconComponents = [
    { component: FaBrandsReact, title: "react", label: "React" },
    { component: FaBrandsHtml5, title: "html", label: "HTML5" },
    { component: FaBrandsCss3, title: "css", label: "CSS3" },
    { component: FaBrandsSass, title: "sass", label: "Sass" },
    { component: SiVite, title: "vite", label: "Vite" },
    { component: SiJavascript, title: "javascript", label: "Javascript" },
    { component: SiNetlify, title: "netlify", label: "Netlify" },
    { component: SiFirebase, title: "firebase", label: "Firebase" },
    { component: SiSolid, title: "solid", label: "SolidJS" },
    { component: SiWebpack, title: "webpack", label: "Webpack" },
    { component: SiReactrouter, title: "reactrouter", label: "Router" },
    { component: SiJest, title: "jest", label: "Jest" },
    { component: SiTailwindcss, title: "tailwind", label: "Tailwind" },
    { component: SiChakraui, title: "chakraui", label: "ChakraUI" },
  ];
  return (
    <div
      class="
      iconsection
      flex
      w-full
      gap-8
      justify-center
      shrink-0
      flex-wrap
      text-4xl
      mt-5
      leading-5
      "
    >
      <For each={iconComponents}>
        {(icon) => {
          const IconComponent = icon.component;
          return (
            <div class="flex flex-col items-center">
              {() => {
                const isActive = props.hoveredIcons().includes(icon.title);
                return (
                  <>
                    <IconComponent
                      className={`iconarray ${isActive ? "active" : ""}`}
                      title={icon.title}
                      style={isActive ? "fill: #6ee7b7" : "fill: #064e3b"}
                    />
                    <p class="text-xs mt-3 label-text">
                      {isActive ? icon.label : " "}
                    </p>
                  </>
                );
              }}
            </div>
          );
        }}
      </For>
    </div>
  );
};

export default IconArray;
