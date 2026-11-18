import aboutImage from "../assets/images/about-construction.jpg";
import Reveal from "./Reveal";
import { Link } from "react-router";

<div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
  <Reveal direction="right">
    <div className="relative">
      {/* About image */}
    </div>
  </Reveal>

  <Reveal direction="left" delay={0.15}>
    <div>
      {/* About content */}
    </div>
  </Reveal>
</div>
function About() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">

        {/* Image */}
        <div className="relative">
          <img
            src={aboutImage}
            alt="Rafmus construction professionals working on a project"
            className="h-[520px] w-full object-cover shadow-xl"
          />

          <div className="absolute -bottom-8 -right-4 hidden bg-[#0F2747] p-8 text-white shadow-xl md:block">
            <p className="text-4xl font-extrabold text-blue-300">
              10+
            </p>

            <p className="mt-2 text-sm uppercase tracking-[0.2em]">
              Years of Experience
            </p>
          </div>
        </div>

        {/* Content */}
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-600">
            About Rafmus
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0F2747] md:text-5xl">
            We Build Dreams not Buildings
          </h2>

          <p className="mt-6 leading-8 text-gray-600">
                      At Rafmus Builders Consult our objective is to provide our clients
                      with an "I am assured experience when we are chosen to execute their projects".
                      Our emphasis on clear communication and follow through proceedures ensures that clients objectives are top priority in the planning and execution of all our works.
          </p>

          <p className="mt-4 leading-8 text-gray-600">
            We support clients through every phase of a project, from planning
            and cost estimation to construction, supervision, renovation, and
            final delivery.
          </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-[#0F2747]">
                Quality Construction
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We prioritise strong materials, careful execution, and
                professional standards.
              </p>
            </div>

            <div className="border-l-4 border-blue-600 pl-4">
              <h3 className="font-bold text-[#0F2747]">
                Reliable Delivery
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                We plan each phase clearly and communicate progress throughout
                the project.
              </p>
            </div>
          </div>
                  <Link
                      to="/projects"
                      className="mt-9 inline-block rounded-md bg-[#0F2747] px-7 py-4 font-semibold text-white transition hover:bg-[#1E5AA8]"
                  >
                      Explore Our Projects
                  </Link>
        </div>

      </div>
    </section>
  );
}

export default About;