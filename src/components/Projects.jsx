import { createSignal, For } from "solid-js";
import IconArray from "./IconArray";
import ProjectCard from "./ProjectCard";
import projects from "./data/projectdata";
import { useIntersectionObserver } from "solidjs-use";
import "./styles/animations.css";

const Projects = () => {
  const [hoveredIcons, setHoveredIcons] = createSignal([]);
  const [isVisible, setIsVisible] = createSignal(false);
  const [target, setTarget] = createSignal(null);

  useIntersectionObserver(target, ([{ isIntersecting }]) => {
    setIsVisible(isIntersecting);
  });

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
      opacity-0
        "
      ref={setTarget}
      className={isVisible() ? "opacityFadeIn" : ""}
    >
      <h2 id="projects" class="text-4xl mt-9 font-semibold">
        Projects
      </h2>
      <IconArray hoveredIcons={hoveredIcons} />
      <div
        className={isVisible() ? "fadeInFromBottom" : ""}
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
              includeImage={project.includeImage}
              bottomButtons={project.bottomButtons}
            />
          )}
        </For>
      </div>
    </div>
  );
};

export default Projects;
