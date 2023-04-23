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
    <div>
      <ProjectCard
        title={testProj.title}
        src={testProj.src}
        alt={testProj.alt}
        description={testProj.description}
      />
    </div>
  );
};

export default Projects;
