import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Reveal from "./Reveal";

<div className="grid gap-8 md:grid-cols-2">
  {projects.map((project, index) => (
    <Reveal
      key={project.id}
      delay={index * 0.1}
    >
      <ProjectCard project={project} />
    </Reveal>
  ))}
</div>

function Projects() {
  return (
    <section id="projects" className="bg-gray-100 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <p className="font-bold uppercase tracking-[0.3em] text-blue-600">
            Our Projects
          </p>

          <h2 className="mt-4 text-5xl font-extrabold text-[#0F2747]">
            Building Excellence Across Every Project
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-600">
            Every project reflects our commitment to quality, durability,
            precision, and client satisfaction.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;