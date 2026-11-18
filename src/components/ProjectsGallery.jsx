import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";
import Reveal from "./Reveal";

const categories = [
  "All",
  "Residential",
  "Commercial",
  "Civil Engineering",
  "Renovation",
];

function ProjectGallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActiveCategory(category)}
              className={`rounded-md px-5 py-3 font-semibold transition ${
                activeCategory === category
                  ? "bg-[#0F2747] text-white"
                  : "bg-white text-[#0F2747] shadow-sm hover:bg-blue-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <Reveal
              key={project.id}
              delay={index * 0.08}
              className="h-full"
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="text-2xl font-bold text-[#0F2747]">
              No projects found
            </h3>

            <p className="mt-3 text-gray-600">
              There are currently no projects in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProjectGallery;