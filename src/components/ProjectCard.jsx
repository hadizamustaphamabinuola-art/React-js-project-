import { Link } from "react-router";
import { FaLocationDot } from "react-icons/fa6";

function ProjectCard({ project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>

      <div className="flex flex-1 flex-col p-7">
        <span className="w-fit rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {project.category}
        </span>

        <h3 className="mt-4 text-2xl font-bold text-[#0F2747]">
          {project.title}
        </h3>

        <p className="mt-3 flex items-center gap-2 text-gray-500">
          <FaLocationDot className="text-blue-600" />
          {project.location}
        </p>

        <p className="mt-4 flex-1 leading-7 text-gray-600">
          {project.description}
        </p>

        <Link
          to="/contact"
          className="mt-6 inline-block font-semibold text-blue-700 transition hover:text-blue-900"
        >
          Discuss a Similar Project →
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;