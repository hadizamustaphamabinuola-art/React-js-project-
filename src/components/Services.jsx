import ServiceCard from "./ServiceCard";
import { services } from "../data/services";
import Reveal from "./Reveal";
<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <Reveal
      key={service.id}
      delay={index * 0.08}
    >
      <ServiceCard service={service} />
    </Reveal>
  ))}
</div>

function Services() {
  return (
    <section id="services" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-14 max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            What We Do
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0F2747] md:text-5xl">
            Construction Services Built Around Your Vision
          </h2>

          <p className="mt-5 text-lg leading-8 text-gray-600">
            We provide practical construction and consultancy services from
            early planning to final delivery.
          </p>
        </div>

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;