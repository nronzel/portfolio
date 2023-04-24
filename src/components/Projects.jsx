import ProjectCard from "./ProjectCard";

const Projects = () => {
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
      justify-center
      items-center
      gap-8 w-full
      flex-wrap
      border-t-2
      border-emerald-500
      pt-9
      "
    >

      <ProjectCard
        title={testProj.title}
        src={testProj.src}
        alt={testProj.alt}
        description={testProj.description}
        icons={["solid", "vite", "css", "javascript"]}
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
      />
      <ProjectCard
        title={testProj.title}
        src={testProj.src}
        alt={testProj.alt}
        description={testProj.description}
        icons={["html", "webpack", "css", "javascript", "react"]}
      />
      <ProjectCard
        title={testProj.title}
        src={testProj.src}
        alt={testProj.alt}
        description={testProj.description}
        icons={["solid", "vite", "css", "javascript"]}
      />
    </div>
  );
};

export default Projects;
