import Navbar from "../components/Navbar";
import ServicesGrid from "../components/Services";
import WorkProcess from "../components/WorkProcess";
import QuoteCTA from "../components/QuoteCTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BackToTop from "../components/BackToTop";

function ServicesPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#0F2747] px-6 py-24 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            What We Do
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            Our Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Professional solutions for construction, renovation, supervision,
            planning, and project delivery.
          </p>
        </section>

        <ServicesGrid />
        <QuoteCTA />
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default ServicesPage;