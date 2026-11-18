import { services } from "../data/services";
import ServiceDetailCard from "./ServiceDetailCard";
import Reveal from "./Reveal";

function ServicesGrid() {
  return (
    <section className="bg-gray-100 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <div className="mx-auto mb-14 max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-700">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#0F2747] md:text-5xl">
              Construction Services Built Around Your Project
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              From early planning to final delivery, we provide the technical
              support and construction expertise required to move projects
              forward confidently.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal
              key={service.id}
              delay={index * 0.08}
              className="h-full"
            >
              <ServiceDetailCard service={service} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesGrid;