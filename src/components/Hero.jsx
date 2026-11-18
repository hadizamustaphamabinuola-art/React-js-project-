import heroImage from "../assets/images/hero-construction.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router"

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0F2747]"
    >
      <img
        src={heroImage}
        alt="Modern construction project"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="absolute inset-0 bg-[#0F2747]/75" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pt-28">
        <motion.div
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.9,
    ease: "easeOut",
  }}
  className="max-w-3xl"
>
  {/* Your existing hero content */}
</motion.div>
        <div className="max-w-3xl">
          <p className="mb-5 uppercase tracking-[0.3em] text-blue-200">
            Building with purpose
          </p>

          <h1 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Strong Foundations.
            <br />
            Lasting Structures.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-200">
            Rafmus Builders Consult delivers dependable construction,
            renovation, project supervision, and building consultancy services
            with precision from blueprint to completion.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
                      <Link
                          to="/contact"
                          className="bg-blue-600 px-7 py-4 font-semibold text-white transition hover:bg-blue-700"
                      >
                          Request a Quote
                      </Link>
                      <Link
                          to="/projects"
                          className="border border-white px-7 py-4 font-semibold text-white transition hover:bg-white hover:text-[#0F2747]"
                      >
                          View Projects
                      </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;