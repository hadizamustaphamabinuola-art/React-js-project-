import Navbar from "../components/Navbar";
import About from "../components/About";
import WhyChooseUs from "../components/WhyChooseUs";
import QuoteCTA from "../components/QuoteCTA";
import Footer from "../components/Footer";
import FloatingWhatsApp from "../components/FloatingWhatsApp";
import BackToTop from "../components/BackToTop";

function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="pt-24">
        <section className="bg-[#0F2747] px-6 py-24 text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-blue-300">
            Who We Are
          </p>

          <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">
            About Rafmus
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Building dependable spaces through careful planning, professional
            supervision, and quality workmanship.
          </p>
        </section>

        <About />
        <WhyChooseUs />
        <QuoteCTA />
      </main>

      <Footer />
      <BackToTop />
      <FloatingWhatsApp />
    </>
  );
}

export default AboutPage;