function ServiceCard({ service }) {
  return (
    <article className="group border border-gray-200 bg-white p-8 transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-xl">
      <span className="text-sm font-bold tracking-[0.3em] text-blue-600">
        {service.number}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-[#0F2747]">
        {service.title}
      </h3>

      <p className="mt-4 leading-7 text-gray-600">
        {service.description}
      </p>

      <a
        href="#quote"
        className="mt-7 inline-block font-semibold text-blue-700 transition group-hover:translate-x-2"
      >
        Discuss this service →
      </a>
    </article>
  );
}

export default ServiceCard;