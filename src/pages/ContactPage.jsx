import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BackToTop from "../components/BackToTop";

function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#0F2747] px-6 py-24 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Get in Touch
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            Contact Rafmus
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Tell us about your proposed construction, renovation, consultancy,
            or supervision project.
          </p>
        </section>

        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default ContactPage;