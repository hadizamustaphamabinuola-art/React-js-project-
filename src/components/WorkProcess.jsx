import Reveal from "./Reveal";

const steps = [
  {
    number: "01",
    title: "Consultation",
    description:
      "We discuss your project goals, preferred design, budget, location, and expected timeline.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Our team develops the project requirements, construction approach, schedule, and cost expectations.",
  },
  {
    number: "03",
    title: "Construction",
    description:
      "The project moves to site with coordinated labour, materials, supervision, and quality checks.",
  },
  {
    number: "04",
    title: "Handover",
    description:
      "After inspections and final corrections, the completed project is prepared for client handover.",
  },
];

function WorkProcess() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
              Our Process
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#0F2747] md:text-5xl">
              How We Bring Your Project to Life
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <Reveal key={step.number} delay={index * 0.1}>
              <article className="relative h-full border border-gray-200 p-7 transition duration-300 hover:border-blue-500 hover:shadow-lg">
                <span className="text-5xl font-extrabold text-blue-100">
                  {step.number}
                </span>

                <h3 className="mt-4 text-xl font-bold text-[#0F2747]">
                  {step.title}
                </h3>

                <p className="mt-4 leading-7 text-gray-600">
                  {step.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WorkProcess;