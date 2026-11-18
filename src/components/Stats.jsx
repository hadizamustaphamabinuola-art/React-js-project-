const stats = [
  {
    number: "14+",
    label: "Years of Experience",
  },
  {
    number: "120+",
    label: "Projects Completed",
  },
  {
    number: "95%",
    label: "Client Satisfaction",
  },
  {
    number: "10+",
    label: "Skilled Professionals",
  },
];

function Stats() {
  return (
    <section className="bg-[#0F2747] py-16 text-white">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <h2 className="text-4xl font-extrabold text-blue-300 md:text-5xl">
              {stat.number}
            </h2>

            <p className="mt-3 text-sm uppercase tracking-wider text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stats;