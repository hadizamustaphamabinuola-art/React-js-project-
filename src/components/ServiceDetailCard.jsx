import { FaCheck } from "react-icons/fa6";

function ServiceDetailCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="group flex h-full flex-col bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
      <div className="flex h-16 w-16 items-center justify-center rounded-md bg-blue-100 text-3xl text-blue-700 transition duration-300 group-hover:bg-[#0F2747] group-hover:text-white">
        <Icon />
      </div>

      <h2 className="mt-6 text-2xl font-bold text-[#0F2747]">
        {service.title}
      </h2>

      <p className="mt-4 leading-7 text-gray-600">
        {service.description}
      </p>

      <ul className="mt-6 space-y-3">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-3 text-gray-700"
          >
            <FaCheck className="mt-1 shrink-0 text-blue-600" />

            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ServiceDetailCard;