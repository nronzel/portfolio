import { createSignal, For } from "solid-js";
import IconArray from "./IconArray";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectdata";

const Projects = () => {
  const [hoveredIcons, setHoveredIcons] = createSignal([]);

  return (
    <div
      class="
      flex
      flex-col
      w-full
      justify-center
      items-center
      border-l-8
      border-b-2
      border-emerald-500
      gap-3
      relative
      "
    >
      <h2 id="projects" class="text-4xl mt-9 font-semibold">
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
      pl-9
      pr-9
      pb-16
      relative
      "
      >
        <For each={projects}>
          {(project) => (
            <ProjectCard
              title={project.title}
              src={project.src}
              alt={project.alt}
              description={project.description}
              icons={project.icons}
              sourcecode={project.sourcecode}
              link={project.link}
              hoveredIcons={hoveredIcons}
              setHoveredIcons={setHoveredIcons}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Projects;
