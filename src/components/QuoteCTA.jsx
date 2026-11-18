import { Link } from "react-router";
function QuoteCTA() {

  return (
    <section id="quote" className="bg-blue-600 py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-center">
        <div className="max-w-3xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-100">
            Start Your Project
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white md:text-5xl">
            Have a Construction Project in Mind?
          </h2>

          <p className="mt-5 text-lg leading-8 text-blue-100">
            Tell us about your project and let our team help you plan the next
            step with clarity and confidence.
          </p>
        </div>
              <Link
                  to="/contact"
                  className="shrink-0 bg-white px-8 py-4 font-bold text-[#0F2747] shadow-lg transition duration-300 hover:-translate-y-1 hover:bg-gray-100"
              >
                  Request a Free Quote
              </Link>
      </div>
    </section>
  );
}

export default QuoteCTA;