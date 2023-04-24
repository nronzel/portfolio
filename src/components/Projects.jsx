import { createSignal } from "solid-js";
import IconArray from "./IconArray";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  const [hoveredIcons, setHoveredIcons] = createSignal([]);

  const testProj = {
    title: "title",
    src: "#",
    alt: "test alt",
    description:
      "Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint consectetur cupidatat.",
  };
  return (
    <div
      class="
      flex
      flex-col
      justify-center
      items-center
      border-t-2
      border-emerald-500
      gap-3
      "
    >
      <h2 id="projects" class="text-5xl mt-9">
        Projects
      </h2>
      <IconArray hoveredIcons={hoveredIcons} />
      <div
        class="
      flex
      justify-center
      items-center
      gap-8 w-full
      flex-wrap
      pt-9
      relative
      "
      >
        <ProjectCard
          title={testProj.title}
          src={testProj.src}
          alt={testProj.alt}
          description={testProj.description}
          icons={["solid", "vite", "css", "javascript"]}
          hoveredIcons={hoveredIcons}
          setHoveredIcons={setHoveredIcons}
        />
        <ProjectCard
          title={testProj.title}
          src={testProj.src}
          alt={testProj.alt}
          description={testProj.description}
          icons={[
            "teact",
            "vite",
            "sass",
            "javascript",
            "reactrouter",
            "firebase",
            "netlify",
          ]}
          hoveredIcons={hoveredIcons}
          setHoveredIcons={setHoveredIcons}
        />
        <ProjectCard
          title={testProj.title}
          src={testProj.src}
          alt={testProj.alt}
          description={testProj.description}
          icons={["html", "webpack", "css", "javascript", "react"]}
          hoveredIcons={hoveredIcons}
          setHoveredIcons={setHoveredIcons}
        />
        <ProjectCard
          title={testProj.title}
          src={testProj.src}
          alt={testProj.alt}
          description={testProj.description}
          icons={["solid", "vite", "css", "javascript"]}
          hoveredIcons={hoveredIcons}
          setHoveredIcons={setHoveredIcons}
        />
      </div>
    </div>
  );
};

export default Projects;
